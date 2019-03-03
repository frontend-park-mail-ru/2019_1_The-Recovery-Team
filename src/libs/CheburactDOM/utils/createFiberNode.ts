import { FiberTypes, IFiberNode } from 'libs/CheburactDOM/types';
import { IDOMNode, IElement } from 'libs/Cheburact/types';

export default ({
    type,
    stateNode,
    key = null,
    children = [],
    ref = null,
}: {
  type: FiberTypes,
  stateNode: IElement,
  key?: null | string | number,
  children?: Array<IFiberNode>,
  ref?: IDOMNode | null,
}): IFiberNode => ({
  type,
  stateNode,
  key,
  children,
  ref,
});
