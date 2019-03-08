import { FiberTypes, IFiberNode } from 'libs/CheburactDOM/types';
import { IElement, IVirtualNode } from 'libs/Cheburact/types';
import getTreeBuilder from 'libs/CheburactDOM/utils/buildTree';
import { rootContext } from 'libs/CheburactDOM/utils/hostContext';

export default ($target: HTMLElement, fiber: IFiberNode | null, element: IElement, reconcileFunc): IFiberNode | null => {
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
    nextFiber.children = reconcileFunc(nextFiber.children, (element as IVirtualNode).children);
    return nextFiber;
  }

  if (fiber.type === FiberTypes.COMPONENT) {

  }
};
