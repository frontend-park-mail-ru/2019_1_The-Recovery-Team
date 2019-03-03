import { IElement } from 'libs/Cheburact/types';
import { rootContext } from './utils/hostContext';
import treeBuilder from './utils/buildTree';
import updateTree from './utils/updateTree';
import Updater from './Updater';

let buildTree: any = null;

const render = (element: IElement | null, container: HTMLElement | null) => {
  if (!container || !element) {
    return;
  }

  rootContext.updater = new Updater();
  buildTree = treeBuilder(rootContext);
  rootContext.updater.setUpdateTreeFunc((q) => {
    updateTree(rootContext, q);
  });

  if (!rootContext.rootHTMLContainer) {
    rootContext.rootHTMLContainer = container;
  }

  if (!rootContext.rootElement) {
    rootContext.rootElement = element;
  }

  window.onload = () => {
    rootContext.referenceFiberRoot = buildTree(container, element);
    console.log('BUILT:', container, rootContext.referenceFiberRoot);
  };
};

export {
  render,
};
