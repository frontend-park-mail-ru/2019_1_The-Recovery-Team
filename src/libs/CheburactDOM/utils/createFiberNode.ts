import { FiberTypes, IFiberNode } from 'libs/CheburactDOM/types';
import { IElement } from 'libs/Cheburact/types';

export default ({
    type,
    stateNode,
    key = null,
    children = [],
}: {
  type: FiberTypes,
  stateNode: IElement,
  key?: null | string | number,
  children?: Array<IFiberNode>,
}): IFiberNode => ({
  type,
  stateNode,
  key,
  children,
});
