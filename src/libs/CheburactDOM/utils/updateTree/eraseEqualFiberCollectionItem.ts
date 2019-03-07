import { IElement, IVirtualNode } from 'libs/Cheburact/types';
import { FiberCollectionItem, FiberCollections } from './types';
import getFiberTypeOfElement from './getFiberTypeOfElement';
import { FiberTypes } from 'libs/CheburactDOM/types';

const eraseKeyFormMapArray = (
    map: {[key: string]: Array<FiberCollectionItem>},
    key: string,
): FiberCollectionItem | null => {
  const relatedArr = map[key];
  if (!relatedArr || relatedArr.length === 0) {
    return null;
  }

  const relatedItem = relatedArr[0];

  if (relatedArr.length > 1) {
    const [_, ...rest] = relatedArr;
    map[key] = rest;
  }
  else {
    delete map[key as string];
  }

  return relatedItem;
};

/*
* Вытаскивает из коллекции эквивалентный айтем и возвращает его
* иначе null
* */
export default ({
    keysMap,
    componentsArr,
    stringsMap,
    vNodesMap
}: FiberCollections, el: IElement): FiberCollectionItem | null => {
  if (el['key']) {
    // TODO: добавить случай если ключ один, а элементы разыне
    const key = el['key'];
    const related = keysMap[key] || null;
    delete keysMap[key];
    return related;
  }

  const fiberType = getFiberTypeOfElement(el);
  if (!fiberType) {
    return null;
  }

  switch (fiberType) {
    case FiberTypes.STRING:
      return eraseKeyFormMapArray(stringsMap, el as string);

    case FiberTypes.VIRTUAL_NODE:
      return eraseKeyFormMapArray(vNodesMap, (el as IVirtualNode).type);

    case FiberTypes.COMPONENT:
      for (let relIndex = 0; relIndex < componentsArr.length; relIndex++) {
        const item = componentsArr[relIndex];
        if (item.fiber.stateNode.constructor === el.constructor) {
          return componentsArr.splice(relIndex, 1)[0];
        }
      }
      return null;
  }

  return null;
}