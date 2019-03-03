import Component, { isComponentClass } from '../Component';
import { IVirtualNode, VirtualNodeProps } from '../types';

const getFlatArray = (arr) => {
  const res = [];
  arr.map((item) => {
    if (!Array.isArray(item)) {
      res.push(item);
    }
    else {
      res.push(...getFlatArray(item));
    }
  });
  return res;
};

export default function createElement(
    type: Function | string,
    props: VirtualNodeProps | any,
    ...children: Array<Array<any> | IVirtualNode | string>
): IVirtualNode | Component | Function {
  const { ref = null, key = null, ...otherProps } = props || {};

  const flatChildren = getFlatArray(children);

  if (typeof type === 'string') {
    return {
      type,
      props: otherProps,
      children: flatChildren,
      ref,
    } as IVirtualNode;
  }

  if (isComponentClass(type)) {
    return new (type as any)({ ...otherProps, children: flatChildren });
  }

  if (typeof type === 'function') {
    return type({ ...otherProps, children: flatChildren });
  }

  return type;
}
