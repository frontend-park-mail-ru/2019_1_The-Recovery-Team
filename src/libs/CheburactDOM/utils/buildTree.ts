import {
  IComponent,
  IElement,
  isIComponent,
  isIVirtualNode,
  IVirtualNode,
} from 'libs/Cheburact/types';
import { IRootContext } from './hostContext';
import createFiberNode from './createFiberNode';
import { FiberTypes, IFiberNode } from '../types';


const getTreeBuilder = (rootContext: IRootContext) => {

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

  const buildTextNode = (node: string, $parent: HTMLElement): Array<IFiberNode> => {
    const $textNode = rootContext.createInstance(node);
    rootContext.appendChild($parent, $textNode);

    return [createFiberNode({
      stateNode: node,
      type: FiberTypes.STRING,
      ref: $textNode,
    })];
  };

  const buildIComponentNode = (node: IComponent, $parent: HTMLElement, buildTree): Array<IFiberNode> => {
    const curFiberNode = createFiberNode({
      stateNode: node,
      type: FiberTypes.COMPONENT,
    });
    node['__fiber'] = curFiberNode;
    node.setUpdater(rootContext.updater as any); // updater should be not null
    const subChildren: Array<IFiberNode> = buildTree($parent, node.render(), curFiberNode) || [];

    curFiberNode.children.push(...subChildren);
    node.componentDidMount();

    return [curFiberNode];
  };

  const buildIVirtualNode = (node: IVirtualNode, $parent: HTMLElement): Array<IFiberNode> => {
    const $node = rootContext.createInstance(node) as HTMLElement;
    if (node.ref) {
      node.ref($node);
    }
    rootContext.appendChild($parent, $node);

    const curFiberNode = createFiberNode({
      type: FiberTypes.VIRTUAL_NODE,
      stateNode: node,
      ref: $node,
    });

    if ($node instanceof HTMLElement) {
      node.children.map(getSubBuildTree($node, curFiberNode, curFiberNode.children));
    }

    rootContext.finalizeCreateInstance($node, node);
    return [curFiberNode];
  };

  const buildTree = (
    $target: HTMLElement,
    child: IElement | null | Array<IElement | null>,
    parent: IFiberNode | null = null,
  ): Array<IFiberNode> | null => {
    console.log('build tree: ', child);

    if (!child) {
      return null;
    }

    if (typeof child === 'string') {
      return buildTextNode(child, $target);
    }

    if (isIComponent(child)) {
      return buildIComponentNode(child, $target, buildTree);
    }

    if (isIVirtualNode(child)) {
      return buildIVirtualNode(child, $target);
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
