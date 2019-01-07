import VirtualNode from './VirtualNode';
import Component from 'libs/Cheburact/Component';

const createElement = (
    type: Function | string,
    props: any,
    ...children: Array<VirtualNode | string>
): VirtualNode | Component | Function => {
  if (typeof type === 'string') {
    return new VirtualNode(type, props, ...children);
  }
  if (type.prototype instanceof Component) {
    return new (type as any)({ ...props, children });
  }
  if (typeof type === 'function') {
    return type({ ...props, children });
  }
  return type;
};

export {
    VirtualNode,
    Component,
    createElement,
};

export default class Cheburact {}
