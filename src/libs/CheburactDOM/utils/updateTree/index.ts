import { IComponent, IElement, IVirtualNode } from 'libs/Cheburact/types';
import getTreeBuilder from '../buildTree';
import { IRootContext } from '../hostContext';
import { FiberTypes, IFiberNode, UpdateQueueItem } from '../../types';

import eraseEqualFiberCollectionItem from './eraseEqualFiberCollectionItem';
import spreadFibersByType from './spreadFibersByType';
import getFlatArrayFromCollection from './getFlatArrayFromCollection';
import unmount from './unmount';
import findItemInUpdateQueue from './findItemInUpdateQueue';
import { rootContext } from 'libs/CheburactDOM/utils/hostContext';
import { FiberCollectionItem } from 'libs/CheburactDOM/utils/updateTree/types';

const gerTreesReconciler = (
    updateQueue: Array<UpdateQueueItem>
) => {

  const reconcileTrees = (
      $target: HTMLElement,
      fibers: Array<IFiberNode>,
      elements: Array<IElement>,
  ): Array<IFiberNode> => {

    const updateOrCreateFiberWithElement = (
        $target: HTMLElement,
        fiber: IFiberNode | null,
        element: IElement,
    ): IFiberNode | null => {
      if (!fiber) {
        if (!rootContext.updater) {
          return null;
        }

        const builtTree = getTreeBuilder(rootContext)($target, element);
        if (!builtTree || builtTree.length === 0) {
          return null;
        }
        return builtTree[ 0 ];
      }

      if (!fiber.ref && fiber.type !== FiberTypes.COMPONENT) {
        return null;
      }

      if (fiber.type === FiberTypes.STRING) {
        return rootContext.updateTextFiber(fiber, element as string);
      }

      if (fiber.type === FiberTypes.VIRTUAL_NODE) {
        const nextFiber = rootContext.updateVNodeFiber(fiber, element as IVirtualNode);
        if (!nextFiber) {
          return null;
        }
        nextFiber.children = reconcileTrees(
            (nextFiber.ref as HTMLElement),
            nextFiber.children,
            (element as IVirtualNode).children
        );
        return nextFiber;
      }

      if (fiber.type === FiberTypes.COMPONENT) {
        const prevComp = fiber.stateNode as IComponent;
        // const nextComp = element as IComponent;

        const { nextState } = findItemInUpdateQueue(prevComp, updateQueue) || {};
        prevComp.writeState({ ...prevComp.getState(), ...(nextState || {}) });

        let renderedTree: any = prevComp.render();
        if (!Array.isArray(renderedTree)) {
          renderedTree = [renderedTree];
        }

        fiber.children = reconcileTrees($target, fiber.children, renderedTree);
        fiber.stateNode = prevComp;
        return fiber;
      }
      return null;
    };

    const collection = spreadFibersByType(fibers);
    const relatedItems: Array<[FiberCollectionItem | null, IElement]>
      = elements.map((el: IElement) => ([eraseEqualFiberCollectionItem(collection, el), el]));

    // Удаляем оставшиеся элементы
    const itemsToDelete = getFlatArrayFromCollection(collection);
    itemsToDelete.forEach((item) => item && unmount(item.fiber));

    // Обновляем и вставляем в target с текущего индекса
    // TODO:
    const nextChildren: Array<IFiberNode> = [];
    relatedItems.forEach(([item, el]) => {
      const fiber = item ? (item as FiberCollectionItem).fiber : null;
      const nextFiber = updateOrCreateFiberWithElement($target, fiber, el);
      if (nextFiber) {
        nextChildren.push(nextFiber);
        if (nextFiber.type !== FiberTypes.COMPONENT && nextFiber.ref) {
          $target.appendChild(nextFiber.ref);
        }
      }
    });

    console.log('RECONCILE', collection, 'TO:', elements, 'FOUND', relatedItems, itemsToDelete);
    return nextChildren;
  };

  return reconcileTrees;
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
        const qItem = findItemInUpdateQueue(node.stateNode as any, updateQueue);
        if (qItem) {
          const element: IComponent = qItem.fiberNode.stateNode as IComponent;
          element.writeState(qItem.nextState);
          let renderedTree: any = element.render();
          if (!Array.isArray(renderedTree)) {
            renderedTree = [renderedTree];
          }

          node.children = gerTreesReconciler(updateQueue)($target, node.children, renderedTree);
          console.log('FOUND TO UPDATE:', qItem, renderedTree, node.children);
          return node;
        }
      }

      node.children = bypassFiber(node.children, $nextTarget);
      return node;
    });
  };

  return bypassFiber(rootContext.referenceFiberRoot || [], rootHTMLContainer);
}
