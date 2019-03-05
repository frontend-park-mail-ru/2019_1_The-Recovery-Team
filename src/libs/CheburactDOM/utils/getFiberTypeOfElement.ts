import { IElement, isIComponent, isIVirtualNode } from 'libs/Cheburact/types';
import { FiberTypes } from '../types';

export default (element: IElement): FiberTypes | null => {
  if (typeof element === 'string') {
    return FiberTypes.STRING;
  }
  if (isIComponent(element)) {
    return FiberTypes.COMPONENT;
  }
  if (isIVirtualNode(element)) {
    return FiberTypes.VIRTUAL_NODE;
  }
  return null;
};
