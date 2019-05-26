import Component from 'libs/Cheburact/Component/Component';

export default Component;

export const isComponentClass = (mayBeComponent: any): boolean =>
  mayBeComponent.prototype instanceof Component;
