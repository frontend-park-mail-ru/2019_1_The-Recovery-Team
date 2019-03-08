import { IElement, isIVirtualNode, IVirtualNode } from 'libs/Cheburact/types';
import { isEventProp, isClassNameProp, setBooleanProp, setEventProp } from './props';
import { IFiberNode } from '../types';
import Updater from '../Updater';
import getFiberTypeOfElement from 'libs/CheburactDOM/utils/updateTree/getFiberTypeOfElement';
import { BOUND_EVENT_LISTENERS } from 'libs/CheburactDOM/config/customFields';


export interface IRootContext {
  rootHTMLContainer: HTMLElement | null;
  referenceFiberRoot: Array<IFiberNode> | null;
  rootElement: IElement | null;
  updater: Updater | null;

  createInstance: (element: IElement) => Text | HTMLElement | null;
  finalizeCreateInstance: ($target: HTMLElement, element: IVirtualNode) => any;
  appendChild: ($target: HTMLElement, $child: Text | HTMLElement | null) => any;
  areEqual: (fiber: IFiberNode, element: IElement) => boolean;

  updateTextFiber: (fiber: IFiberNode, element: string) => IFiberNode;
  updateVNodeFiber: (fiber: IFiberNode, element: IVirtualNode) => IFiberNode | null;
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
  },

  updateTextFiber: (fiber: IFiberNode, element: string): IFiberNode => {
    if (fiber.stateNode !== element && fiber.ref) {
      (fiber.ref as Text).nodeValue = element;
      fiber.stateNode = element;
    }
    return fiber;
  },

  updateVNodeFiber: (fiber: IFiberNode, element: IVirtualNode): IFiberNode | null => {
    if (!fiber.ref || !fiber.stateNode) {
      return null;
    }
    const { props: oldProps } = (fiber.stateNode as IVirtualNode);
    const { props: newProps } = element;

    const nextEventListenersMap = {};
    Object.entries(newProps).map(([key, value]) => {
      if (isEventProp(key)) {
        nextEventListenersMap[key] = value;
      }
    });

    const htmlRef = fiber.ref as HTMLElement;
    Object.entries(oldProps).forEach(([key, oldValue]) => {
      if (!newProps[key]) {
        if (isClassNameProp(key)) {
          htmlRef.removeAttribute('class');
          return;
        }
        if (isEventProp(key)) {
          const listeners = htmlRef[BOUND_EVENT_LISTENERS] || {};
          (listeners[key] || []).map((listener) =>
              htmlRef.removeEventListener(key, listener));
          delete listeners[key];
          return;
        }
        htmlRef.removeAttribute(key);
      }

      if (isEventProp(key)) {
        if (oldValue !== nextEventListenersMap[key]) {
          htmlRef.removeEventListener(key, oldValue as any);
          const listeners = htmlRef[BOUND_EVENT_LISTENERS] || {};
          const index = (listeners[key] || []).indexOf(oldValue);
          if (index >= 0) {
            (listeners[key] || []).splice(index, 1);
          }
          if (nextEventListenersMap[key]) {
            setEventProp(htmlRef, key, nextEventListenersMap[key]);
            delete nextEventListenersMap[key];
          }
        }
      }
    });
    Object.entries(newProps).forEach(([key, newValue]) => {
      if (isClassNameProp(key)) {
        htmlRef.setAttribute('class', newValue as any);
        return;
      }
      if (typeof newValue === 'boolean') {
        setBooleanProp(htmlRef, key, newValue);
        return;
      }
      if (!isEventProp(key)) {
        htmlRef.setAttribute(key, newValue as any);
      }
    });
    Object.entries(nextEventListenersMap).forEach(([key, value]) => {
      setEventProp(htmlRef, key, value);
    });

    fiber.stateNode = element;
    return fiber;
  }
};
