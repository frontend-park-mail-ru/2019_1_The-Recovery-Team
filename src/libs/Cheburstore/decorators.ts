import * as Cheburact from 'libs/Cheburact';
import Cheburstore from './Cheburstore';

type CheburstoreDecorator<T> = (
  target: Cheburact.Component,
  property: string,
  descriptor: PropertyDescriptor
) => PropertyDescriptor;

const ON_PROP = Symbol('__ON');
const BOUND_LISTENERS = Symbol('__BOUND');

const tryOn = (owner, property) => {
  if (
    !property[ON_PROP] ||
    !property[ON_PROP].store ||
    !property[ON_PROP].type
  ) {
    return;
  }

  const boundProperty = property.bind(owner);
  owner[BOUND_LISTENERS].push(boundProperty);
  property[ON_PROP].store.on(property[ON_PROP].type, boundProperty);
};

const tryOff = (owner, boundProperty) => {
  if (
    !boundProperty[ON_PROP] ||
    !boundProperty[ON_PROP].store ||
    !boundProperty[ON_PROP].type
  ) {
    return;
  }
  boundProperty[ON_PROP].store.off(boundProperty[ON_PROP].type, boundProperty);
};

export const connectToCheburstore = component =>
  class extends component {
    componentDidMount() {
      this[BOUND_LISTENERS] = [];
      const prototype = Object.getPrototypeOf(this);

      // noinspection TsLint
      for (const prop in prototype) {
        tryOn(this, prototype[prop]);
      }

      super.componentDidMount();
    }

    componentWillUnmount() {
      // @ts-ignore
      for (const prop of this[BOUND_LISTENERS]) {
        tryOff(this, prop);
      }

      super.componentWillUnmount();
    }
  };

export const onCheburevent = <T>(
  store: Cheburstore<T>,
  type: string
): CheburstoreDecorator<T> => (
  target,
  property,
  descriptor
): PropertyDescriptor => {
  descriptor.value[ON_PROP] = {
    store,
    type,
  };

  descriptor.enumerable = true;

  return descriptor;
};

export const cheburhandler = (type: string) => (
  target,
  property: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor => {
  descriptor.value[ON_PROP] = type;
  descriptor.enumerable = true;

  return descriptor;
};

export const cheburmodel = modelClass =>
  class extends modelClass {
    constructor(props) {
      super(props);

      const prototype = Object.getPrototypeOf(this);
      // noinspection TsLint
      for (const prop in prototype) {
        const property = prototype[prop];
        if (property[ON_PROP]) {
          this.on(property[ON_PROP], property.bind(this));
        }
      }
    }
  };
