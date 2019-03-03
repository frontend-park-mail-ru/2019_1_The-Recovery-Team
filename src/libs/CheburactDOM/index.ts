import { IElement } from 'libs/Cheburact/types';
import { rootContext } from './utils/hostContext';
import treeBuilder from 'libs/CheburactDOM/utils/buildTree';
import Updater from 'libs/CheburactDOM/Updater';

let buildTree: any = null;
let updater: Updater | null = null;

const render = (element: IElement | null, container: HTMLElement | null) => {
  if (!container || !element) {
    return;
  }

  updater = new Updater();
  buildTree = treeBuilder(rootContext, updater);
  updater.setUpdateTreeFunc(() => {
    container.innerText = '';
    console.log(element, rootContext.referenceFiberRoot);
    rootContext.referenceFiberRoot = buildTree(container, element);
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
