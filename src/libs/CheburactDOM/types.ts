import { IDOMNode, IElement } from 'libs/Cheburact/types';

export enum FiberTypes {
  STRING = 'string',
  COMPONENT = 'COMPONENT',
  VIRTUAL_NODE = 'VIRTUAL_NODE',
}

export interface IFiberNode {
  type: FiberTypes;
  stateNode: IElement;
  key: null | string | number;
  children: Array<IFiberNode>;
  ref: null | IDOMNode;
}

export interface UpdateQueueItem {
  fiberNode: IFiberNode,
  nextState?: Object,
}
