import { FiberTypes, IFiberNode, UpdateQueueItem } from 'libs/CheburactDOM/types';
import { IComponent, IElement, IVirtualNode } from 'libs/Cheburact/types';
import getTreeBuilder from 'libs/CheburactDOM/utils/buildTree';
import { rootContext } from 'libs/CheburactDOM/utils/hostContext';
import findItemInUpdateQueue from 'libs/CheburactDOM/utils/updateTree/findItemInUpdateQueue';

export default (
    updateQueue: Array<UpdateQueueItem>,
    reconcileFunc,
) => (
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
    return builtTree[0];
  }

  if (fiber.type === FiberTypes.STRING) {
    return rootContext.updateTextFiber(fiber, element as string);
  }

  if (fiber.type === FiberTypes.VIRTUAL_NODE) {
    const nextFiber = rootContext.updateVNodeFiber(fiber, element as IVirtualNode);
    if (!nextFiber) {
      return null;
    }
    nextFiber.children = reconcileFunc(
        nextFiber.ref,
        nextFiber.children,
        (element as IVirtualNode).children
    );
    return nextFiber;
  }

  if (fiber.type === FiberTypes.COMPONENT) {
    const prevComp = fiber.stateNode as IComponent;
    const nextComp = element as IComponent;

    const incomingState = findItemInUpdateQueue(prevComp, updateQueue) || {};
    nextComp.writeState({ ...incomingState, ...prevComp.getState() });
    // TODO: didUpdate и render;
  }
  return null;
};
