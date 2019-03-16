import { IDOMNode, IElement } from 'libs/Cheburact/types';
import { FiberTypes, IFiberNode } from '../types';

export const createFiberNode = ({
  type,
  stateNode,
  key = null,
  children = [],
  ref = null,
}: {
  type: FiberTypes;
  stateNode: IElement;
  key?: null | string | number;
  children?: Array<IFiberNode>;
  ref?: IDOMNode | null;
}): IFiberNode => ({
  type,
  stateNode,
  key,
  children,
  ref,
});

export default createFiberNode;
