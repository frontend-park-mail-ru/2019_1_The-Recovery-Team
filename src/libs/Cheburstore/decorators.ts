import * as Cheburact from 'libs/Cheburact';
import Cheburstore from './Cheburstore';

type CheburstoreDecorator<T> = (
  target: Cheburact.Component,
  property: string,
  descriptor: PropertyDescriptor
) => PropertyDescriptor;

const ON_PROP = '__ON';

const tryOn = (owner, property) => {
  if (
    !property[ON_PROP] ||
    !property[ON_PROP].store ||
    !property[ON_PROP].type
  ) {
    return;
  }
  property[ON_PROP].store.on(property[ON_PROP].type, property.bind(owner));
};

const tryOff = (owner, property) => {
  if (
    !property[ON_PROP] ||
    !property[ON_PROP].store ||
    !property[ON_PROP].type
  ) {
    return;
  }
  property[ON_PROP].store.off(property[ON_PROP].type, property.bind(owner));
};

export const connectToCheburstore = component =>
  class extends component {
    componentDidMount() {
      const prototype = Object.getPrototypeOf(this);

      // noinspection TsLint
      for (const prop in prototype) {
        tryOn(this, prototype[prop]);
      }

      super.componentDidMount();
    }

    componentWillUnmount() {
      const prototype = Object.getPrototypeOf(this);

      // noinspection TsLint
      for (const prop in prototype) {
        tryOff(this, prototype[prop]);
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
        if(property[ON_PROP]) {
          this.on(property[ON_PROP], property.bind(this));
        }
      }
    }
  };
