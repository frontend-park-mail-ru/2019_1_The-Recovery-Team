import { IElement } from 'libs/Cheburact/types';
import { rootContext } from './utils/hostContext';
import buildTree from 'libs/CheburactDOM/utils/buildTree';


const render = (element: IElement | null, container: HTMLElement | null) => {
  if (!container || !element) {
    return;
  }

  if (!rootContext.rootHTMLContainer) {
    rootContext.rootHTMLContainer = container;
  }

  if (!rootContext.rootElement) {
    rootContext.rootElement = element;
  }

  window.onload = () => {
    rootContext.referenceFiberRoot = buildTree(container, element);
    console.log('BUILT:', container, rootContext.rootElement, rootContext.referenceFiberRoot);
  };
};

export {
  render,
};
