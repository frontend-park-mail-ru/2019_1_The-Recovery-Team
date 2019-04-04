import Component, { isComponentClass } from '../Component';
import { IVirtualNode, VirtualNodeProps } from '../types';

const getFlatArray = arr => {
  const res = [];
  arr.map(item => {
    if (!Array.isArray(item)) {
      // @ts-ignore
      res.push(item);
    } else {
      res.push(...getFlatArray(item));
    }
  });
  return res;
};

export default function createElement(
  type: Function | string,
  props: VirtualNodeProps | any,
  ...children: Array<any[] | IVirtualNode | string>
): IVirtualNode | Component | Function {
  const { ref = null, key = null, ...otherProps } = props || {};

  const flatChildren = getFlatArray(children).filter(child => !!child);
  console.log('flat children: ', flatChildren);

  if (typeof type === 'string') {
    return {
      type,
      key,
      ref,
      props: otherProps,
      children: flatChildren,
    } as IVirtualNode;
  }

  if (isComponentClass(type)) {
    const component = new (type as any)({
      ...otherProps,
      children: flatChildren,
    });
    component.key = key;
    return component;
  }

  if (typeof type === 'function') {
    return type({ ...otherProps, children: flatChildren });
  }

  return type;
}
