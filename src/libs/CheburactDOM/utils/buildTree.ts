import { IElement, isIComponent, isIVirtualNode } from 'libs/Cheburact/types';
import { rootContext } from './hostContext';
import updater from '../Updater';
import { FiberTypes, IFiberNode } from '../types';
import createFiberNode from 'libs/CheburactDOM/utils/createFiberNode';


export default function buildTree(
    $target: HTMLElement,
    child: IElement | null | Array<IElement | null>,
    parent: IFiberNode | null = null,
): Array<IFiberNode> | null {
  console.log('build tree: ', child);

  if (!child) {
    return null;
  }

  if (typeof child === 'string') {
    const curFiberNode = createFiberNode({
      stateNode: child,
      type: FiberTypes.STRING,
    });

    const $textNode = rootContext.createInstance(child);
    rootContext.appendChild($target, $textNode);
    return [curFiberNode];
  }

  if (isIComponent(child)) {
    const curFiberNode = createFiberNode({
      stateNode: child,
      type: FiberTypes.COMPONENT,
    });

    child.setUpdater(updater);
    const subChildren: Array<IFiberNode> = buildTree($target, child.render(), curFiberNode) || [];
    curFiberNode.children.push(...subChildren);
    child.componentDidMount();

    return [curFiberNode];
  }

  const getSubBuildTree = (
      $target: HTMLElement,
      parent: null | IFiberNode = null,
      container: Array<IFiberNode>,
  ) =>
      (child) =>
      container.push(...(buildTree($target, child, parent) || []));

  if (isIVirtualNode(child)) {
    const curFiberNode = createFiberNode({
      type: FiberTypes.VIRTUAL_NODE,
      stateNode: child,
    });
    const $child = rootContext.createInstance(child) as HTMLElement;
    if (child.ref) {
      child.ref($child);
    }
    rootContext.appendChild($target, $child);

    if ($child instanceof HTMLElement) {
      child.children.map(getSubBuildTree($child, curFiberNode, curFiberNode.children));
    }

    rootContext.finalizeCreateInstance($child, child);
    return [curFiberNode];
  }

  if (Array.isArray(child)) {
    const container: Array<IFiberNode> = [];
    child.map(getSubBuildTree($target, parent, container));
    return container;
  }

  return null;
}
