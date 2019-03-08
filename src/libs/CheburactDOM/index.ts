import { IElement } from 'libs/Cheburact/types';
import { rootContext, getTreeBuilder } from './utils';
import updateTree from './updateTree';
import Updater from './Updater';

let buildTree: any = null;

const render = (element: IElement | null, container: HTMLElement | null) => {
  if (!container || !element) {
    return;
  }

  rootContext.updater = new Updater();
  buildTree = getTreeBuilder(rootContext);
  rootContext.updater.setUpdateTreeFunc((q) => {
    rootContext.referenceFiberRoot = updateTree(rootContext, q);
  });

  if (!rootContext.rootHTMLContainer) {
    rootContext.rootHTMLContainer = container;
  }

  if (!rootContext.rootElement) {
    rootContext.rootElement = element;
  }

  window.onload = () => {
    rootContext.referenceFiberRoot = buildTree(container, element);
  };
};

export {
  render,
};
