import { IVirtualNode } from 'libs/Cheburact/types';
import { FiberTypes, IFiberNode } from '../../types';
import { FiberCollectionItem, FiberCollections } from './types';


/*
* Разделяет массив Fiber-нод на разные коллекции:
* по ключу, по компонентам, по тегам (если виртуал дом), по текстам
* */
export default (fibers: Array<IFiberNode>): FiberCollections => {
  const result: FiberCollections = {
    keysMap: {},
    vNodesMap: {},
    stringsMap: {},
    componentsArr: [],
  };

  fibers.forEach((fiber: IFiberNode, index: number) => {
    const item: FiberCollectionItem = { fiber, index };

    if (fiber.key) {
      result.keysMap[fiber.key] = item;
      return;
    }

    switch (fiber.type) {
      case FiberTypes.COMPONENT:
        result.componentsArr.push(item);
        return;
      case FiberTypes.VIRTUAL_NODE:
        const type = (fiber.stateNode as IVirtualNode).type;
        result.vNodesMap[type] = [...(result.vNodesMap[type] || []), item];
        return;
      case FiberTypes.STRING:
        const key = fiber.stateNode as string;
        result.stringsMap[key] = [...(result.stringsMap[key] || []), item];
        return;
    }
  });

  return result;
};
