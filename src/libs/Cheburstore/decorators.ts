import Cheburstore from './Cheburstore';


type CheburstoreDecorator<T> = (
  target: Cheburstore<T>,
  property: string,
  descriptor: PropertyDescriptor
) => PropertyDescriptor;

export const cheburstoreOn = <T>(type: string): CheburstoreDecorator<T> => (
  target,
  property,
  descriptor
): PropertyDescriptor => {
  console.log('T', target);
  console.log('P', property);
  console.log('D', descriptor);
  console.log(type);

  const originalMethod = descriptor.value;

  descriptor.value = function(...args) {
    if (!this[`__${property}Bound`]) {
      this.subscribe(type, originalMethod);
    }
    return originalMethod.call(this, ...args);
  };

  return descriptor;
};
