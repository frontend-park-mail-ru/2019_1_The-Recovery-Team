import { IElement, isIVirtualNode, IVirtualNode } from 'libs/Cheburact/types';
import { isEventProp, isClassNameProp, setBooleanProp } from 'libs/CheburactDOM/utils/props/index';
import setEventProp from 'libs/CheburactDOM/utils/props/setEventProp';
import { IFiberNode } from 'libs/CheburactDOM/types';


interface IRootContext {
  rootHTMLContainer: HTMLElement | null;
  referenceFiberRoot: Array<IFiberNode> | null;
  rootElement: IElement | null;

  createInstance: (element: IElement) => Text | HTMLElement | null;
  finalizeCreateInstance: ($target: HTMLElement, element: IVirtualNode) => any;
  appendChild: ($target: HTMLElement, $child: Text | HTMLElement | null) => any;
}

export const rootContext: IRootContext = {
  rootHTMLContainer: null,
  referenceFiberRoot: null,
  rootElement: null,

  createInstance: (element: IElement): Text | HTMLElement | null => {
    if (typeof element === 'string') {
      return document.createTextNode(element);
    }
    if (isIVirtualNode(element)) {
      return document.createElement(element.type);
    }
    return null;
  },

  finalizeCreateInstance: ($target: HTMLElement, element: IVirtualNode): any => {
    const props = element.props || {};
    Object.keys(props).map((name) => {
      const value = props[name];

      if (isEventProp(name)) {
        setEventProp($target, name, value);
        return;
      }
      if (isClassNameProp(name)) {
        $target.setAttribute('class', value as any);
        return;
      }
      if (typeof value === 'boolean') {
        setBooleanProp($target, name, value as any);
        return;
      }
      else {
        $target.setAttribute(name, value as any);
      }
    });
  },

  appendChild: ($target: HTMLElement, $child: Text | HTMLElement | null) => {
    if ($child) {
      $target.appendChild($child);
    }
  },
};
