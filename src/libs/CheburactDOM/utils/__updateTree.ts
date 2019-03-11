import { IRootContext, rootContext } from './hostContext';
import { FiberTypes, IFiberNode, UpdateQueueItem } from '../types';
import {
  IComponent,
  IElement,
  IVirtualNode,
} from 'libs/Cheburact/types';
import getTreeBuilder from './buildTree';
import { COMPONENT_FIBER } from '../config/customFields';
import getFiberTypeOfElement from '../updateTree/getFiberTypeOfElement';

const findItemInQueue = (item: IComponent, q: Array<UpdateQueueItem>): UpdateQueueItem | null => {
  for (let qItem of q) {
    if (qItem.fiberNode === (item as any)[COMPONENT_FIBER]) {
      return qItem;
    }
  }
  return null;
};

const configureFiberCollectionsByType = (fibers: Array<IFiberNode>) => {
  const result = {
    keysMap: {},
    vNodesMap: {},
    stringsMap: {},
    componentsArr: [],
  };

  fibers.forEach((fiber, index) => {
    const item = { fiber, index };
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

const reconcileTrees = (
    $target: HTMLElement,
    fibers: Array<IFiberNode>,
    elements: Array<IElement>,
) => {

  const {
      stringsMap,
      vNodesMap,
      keysMap,
      componentsArr,
  } = configureFiberCollectionsByType(fibers);

  elements.forEach((element, index) => {
    if (element['key']) {
      // TODO:
      const { fiber, index } = keysMap[element['key']];
      if (rootContext.areEqual(fiber, element)) {

      }
      return;
    }
    const fiberType = getFiberTypeOfElement(element);
    switch (fiberType) {
      case FiberTypes.VIRTUAL_NODE:
        const nodes = vNodesMap[element.type] || [];
        return;
      case FiberTypes.COMPONENT:
        // TODO:
        return;
      case FiberTypes.STRING:
        // TODO;
        return;
    }
  });
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
          return node;
        }
      }

      node.children = bypassFiber(node.children, $nextTarget);
      return node;
    });
  };

  return bypassFiber(rootContext.referenceFiberRoot || [], rootHTMLContainer);
}
