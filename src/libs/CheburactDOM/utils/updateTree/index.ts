import {
  IComponent,
  IElement,
} from 'libs/Cheburact/types';
import getTreeBuilder from '../buildTree';
import { IRootContext } from '../hostContext';
import { FiberTypes, IFiberNode, UpdateQueueItem } from '../../types';
import { COMPONENT_FIBER } from '../../config/customFields';

import eraseEqualFiberCollectionItem from './eraseEqualFiberCollectionItem';
import spreadFibersByType from './spreadFibersByType';
import getFlatArrayFromCollection from './getFlatArrayFromCollection';
import unmount from './unmount';

const findItemInQueue = (item: IComponent, q: Array<UpdateQueueItem>): UpdateQueueItem | null => {
  for (let qItem of q) {
    if (qItem.fiberNode === (item as any)[COMPONENT_FIBER]) {
      return qItem;
    }
  }
  return null;
};

const reconcileTrees = (
    $target: HTMLElement,
    fibers: Array<IFiberNode>,
    elements: Array<IElement>,
) => {

  const collection = spreadFibersByType(fibers);
  const relatedItems = elements.map((el) => eraseEqualFiberCollectionItem(collection, el));

  // Удаляем оставшиеся элементы
  const itemsToDelete = getFlatArrayFromCollection(collection);
  relatedItems.map((item) => item && unmount(item.fiber));

  // Обновляем и вставляем в target с текущего индекса
  // TODO:


  console.log('RECONCILE', collection, 'TO:', elements, 'FOUND', relatedItems, itemsToDelete);
};

export default function updateTree(
    rootContext: IRootContext,
    updateQueue: Array<UpdateQueueItem>,
): Array<IFiberNode> | null {
  const { referenceFiberRoot, rootHTMLContainer } = rootContext;

  if (referenceFiberRoot === null || rootHTMLContainer === null) {
    // Нечего обновлять
    return null;
  }

  const bypassFiber = (fiberNodes: Array<IFiberNode>, $target: HTMLElement): Array<IFiberNode> => {
    return fiberNodes.map((node: IFiberNode) => {
      const $nextTarget = node.ref instanceof HTMLElement ? node.ref : $target;

      if (node.type === FiberTypes.COMPONENT) {
        debugger;
        const qItem = findItemInQueue(node.stateNode as any, updateQueue);
        if (qItem) {
          const element: IComponent = qItem.fiberNode.stateNode as IComponent;
          element.writeState(qItem.nextState);
          let renderedTree: any = element.render();
          if (!Array.isArray(renderedTree)) {
            renderedTree = [renderedTree];
          }

          reconcileTrees($target, node.children, renderedTree);
          const buildTree = getTreeBuilder(rootContext);
          const newTree = buildTree($nextTarget, renderedTree);
          node.children = newTree || [];
          console.log('FOUND TO UPDATE:', qItem, renderedTree, node, newTree);
          return node;
        }
      }

      node.children = bypassFiber(node.children, $nextTarget);
      return node;
    });
  };

  return bypassFiber(rootContext.referenceFiberRoot || [], rootHTMLContainer);
}
