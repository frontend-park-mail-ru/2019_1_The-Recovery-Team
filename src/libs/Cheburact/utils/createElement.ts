import Component, { isComponentClass } from '../Component';
import { IVirtualNode, VirtualNodeProps } from '../types';

export default function createElement(
    type: Function | string,
    props: VirtualNodeProps | any,
    ...children: Array<IVirtualNode | string>
): IVirtualNode | Component | Function {
  const { ref = null, key = null, ...otherProps } = props || {};
  if (typeof type === 'string') {
    return {
      type,
      props: otherProps,
      children,
      ref,
    } as IVirtualNode;
  }

  if (isComponentClass(type)) {
    return new (type as any)({ ...otherProps, children });
  }

  if (typeof type === 'function') {
    return type({ ...otherProps, children });
  }

  return type;
}
