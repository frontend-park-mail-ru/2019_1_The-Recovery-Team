import { IElement, isIVirtualNode, IVirtualNode } from 'libs/Cheburact/types';
import { isEventProp, isClassNameProp, setBooleanProp, setEventProp } from './props';
import { IFiberNode } from '../types';
import Updater from '../Updater';
import getFiberTypeOfElement from 'libs/CheburactDOM/utils/updateTree/getFiberTypeOfElement';


export interface IRootContext {
  rootHTMLContainer: HTMLElement | null;
  referenceFiberRoot: Array<IFiberNode> | null;
  rootElement: IElement | null;
  updater: Updater | null;

  createInstance: (element: IElement) => Text | HTMLElement | null;
  finalizeCreateInstance: ($target: HTMLElement, element: IVirtualNode) => any;
  appendChild: ($target: HTMLElement, $child: Text | HTMLElement | null) => any;
  areEqual: (fiber: IFiberNode, element: IElement) => boolean;
}

export const rootContext: IRootContext = {
  rootHTMLContainer: null,
  referenceFiberRoot: null,
  rootElement: null,
  updater: null,

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

  areEqual: (fiber: IFiberNode, element: IElement): boolean => {
    if (fiber.type !== getFiberTypeOfElement(element)) {
      return false;
    }
    return false;
  }
};
