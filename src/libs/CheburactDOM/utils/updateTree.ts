import { IRootContext } from './hostContext';
import { FiberTypes, IFiberNode, UpdateQueueItem } from '../types';
import { IComponent } from 'libs/Cheburact/types';
import getTreeBuilder from 'libs/CheburactDOM/utils/buildTree';

const findItemInQueue = (item: IComponent, q: Array<UpdateQueueItem>): UpdateQueueItem | null => {
  for (let qItem of q) {
    if (qItem.fiberNode.stateNode === item) {
      return qItem;
    }
  }
  return null;
};

const compareTrees = ($target, fibers, elements) => {

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
          const subtree = element.render();
          const buildTree = getTreeBuilder(rootContext);
          const newTree = buildTree($nextTarget, subtree);
          node.children = newTree || [];
          console.log('FOUND TO UPDATE:', qItem, subtree, node, newTree);
          return node;
        }
        else {
          node.children = bypassFiber(node.children, $nextTarget);
        }
      }
      else {
        node.children = bypassFiber(node.children, $nextTarget);
      }
      return node;
    });
  };

  return bypassFiber(rootContext.referenceFiberRoot || [], rootHTMLContainer);
}
