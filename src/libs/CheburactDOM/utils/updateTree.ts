import { IRootContext } from './hostContext';
import { FiberTypes, IFiberNode, UpdateQueueItem } from '../types';
import { IComponent } from 'libs/Cheburact/types';

const findItemInQueue = (item: IComponent, q: Array<UpdateQueueItem>): UpdateQueueItem | null => {
  for (let qItem of q) {
    if (qItem.fiberNode.stateNode === item) {
      return qItem;
    }
  }
  return null;
};

export default function updateTree(
    rootContext: IRootContext,
    updateQueue: Array<UpdateQueueItem>,
): Array<IFiberNode> | null {
  const { referenceFiberRoot } = rootContext;

  if (referenceFiberRoot === null) {
    // Нечего обновлять
    return null;
  }

  const bypassFiber = (fiberNodes: Array<IFiberNode>) => {
    fiberNodes.forEach((node: IFiberNode) => {
      if (node.type === FiberTypes.COMPONENT) {
        debugger;
        const qItem = findItemInQueue(node.stateNode as any, updateQueue);
        if (qItem) {
          const element: IComponent = qItem.fiberNode.stateNode as IComponent;
          element.writeState(qItem.nextState);
          const subtree = element.render();
          console.log('FOUND TO UPDATE:', qItem, subtree);
        }
        else {
          bypassFiber(node.children);
        }
      }
      else {
        bypassFiber(node.children);
      }
    });
  };

  bypassFiber(rootContext.referenceFiberRoot || []);

  return null;
}
