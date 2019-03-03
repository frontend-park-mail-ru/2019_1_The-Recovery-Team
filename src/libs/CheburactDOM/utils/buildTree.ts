import {
  IComponent,
  IElement,
  isIComponent,
  isIVirtualNode,
  IVirtualNode,
} from 'libs/Cheburact/types';
import { IRootContext } from './hostContext';
import { FiberTypes, IFiberNode } from '../types';
import createFiberNode from 'libs/CheburactDOM/utils/createFiberNode';
import Updater from 'libs/CheburactDOM/Updater';


const getTreeBuilder = (rootContext: IRootContext, updater: Updater) => {

  /*
  *  Возвращает метод, который использует забинденные значения для вызова buildTree,
  *  в который достаточно лишь передать child.
  * */
  const getSubBuildTree = (
      $target: HTMLElement,
      parent: null | IFiberNode = null,
      container: Array<IFiberNode>,
  ) =>
      (child) =>
          container.push(...(buildTree($target, child, parent) || []));

  const buildTree = (
    $target: HTMLElement,
    child: IElement | null | Array<IElement | null>,
    parent: IFiberNode | null = null,
  ): Array<IFiberNode> | null => {
    console.log('build tree: ', child);

    if (!child) {
      return null;
    }

    const buildTextNode = (node: string, $parent: HTMLElement): Array<IFiberNode> => {
      const curFiberNode = createFiberNode({
        stateNode: node,
        type: FiberTypes.STRING,
      });

      const $textNode = rootContext.createInstance(node);
      rootContext.appendChild($parent, $textNode);
      return [curFiberNode];
    };

    const buildIComponentNode = (node: IComponent, $parent: HTMLElement): Array<IFiberNode> => {
      const curFiberNode = createFiberNode({
        stateNode: node,
        type: FiberTypes.COMPONENT,
      });

      node.setUpdater(updater);
      const subChildren: Array<IFiberNode>
          = buildTree($parent, node.render(), curFiberNode) || [];

      curFiberNode.children.push(...subChildren);
      node.componentDidMount();

      return [curFiberNode];
    };

    const buildIVirtualNode = (node: IVirtualNode, $parent: HTMLElement): Array<IFiberNode> => {
      const curFiberNode = createFiberNode({
        type: FiberTypes.VIRTUAL_NODE,
        stateNode: node,
      });
      const $node = rootContext.createInstance(node) as HTMLElement;
      if (node.ref) {
        node.ref($node);
      }
      rootContext.appendChild($parent, $node);

      if ($node instanceof HTMLElement) {
        node.children.map(getSubBuildTree($node, curFiberNode, curFiberNode.children));
      }

      rootContext.finalizeCreateInstance($node, node);
      return [curFiberNode];
    };

    if (typeof child === 'string') {
      return buildTextNode(child, $target);
    }

    if (isIComponent(child)) {
      return buildIComponentNode(child, $target);
    }

    if (isIVirtualNode(child)) {
      buildIVirtualNode(child, $target);
    }

    if (Array.isArray(child)) {
      const container: Array<IFiberNode> = [];
      child.map(getSubBuildTree($target, parent, container));
      return container;
    }

    return null;
  };

  return buildTree;
};

export default getTreeBuilder;
