import { IFiberNode } from '../types';

export type FiberCollectionItem = {
  fiber: IFiberNode,
  index: number,
};

export type FiberCollections = {
  keysMap: { [key: string]: FiberCollectionItem },
  vNodesMap:  { [tag: string]: Array<FiberCollectionItem> },
  stringsMap: { [text: string]: Array<FiberCollectionItem> },
  componentsArr: Array<FiberCollectionItem>,
};