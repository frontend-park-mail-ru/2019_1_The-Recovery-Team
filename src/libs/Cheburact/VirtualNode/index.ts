import {
  IComponent,
  IVirtualNode,
  isIComponent,
  isIVirtualNode,
  VirtualNodeProps,
} from 'libs/Cheburact/types';
import isClassNameProp from 'libs/Cheburact/utils/props/isClassNameProp';
import isEventProp from 'libs/Cheburact/utils/props/isEventProp';
import setBooleanProp from 'libs/Cheburact/utils/props/setBooleanProp';
import extractEventName from 'libs/Cheburact/utils/props/extractEventName';

export default class VirtualNode implements IVirtualNode {
  type: string;
  props: VirtualNodeProps;
  children: Array<IVirtualNode | IComponent | string>;
  $el: HTMLElement;

  constructor(
      type: string,
      props: VirtualNodeProps = {},
      ...children: Array<IVirtualNode | IComponent | string>
  ) {
    this.type = type;
    this.props = props || {};
    this.children = children;
    this.$el = document.createElement(this.type);
  }

  asHTML(): HTMLElement {
    this.$el.innerHTML = '';
    return this.appendChildren()
        .addEventListeners()
        .setAttributes()
        .$el;
  }

  appendChildren(): VirtualNode {
    this.children.map(this.appendChild);
    return this;
  }

  appendChild = (
      child: IComponent | IVirtualNode | string | null | Array<any>,
  ) => {
    if (typeof child === 'string') {
      return this.$el.appendChild(document.createTextNode(child));
    }
    if (isIComponent(child)) {
      return this.appendChild(child.render());
    }
    if (Array.isArray(child)) {
      return child.map((child) => this.appendChild(child as any));
    }
    if (isIVirtualNode(child)) {
      const $child = child.asHTML();
      if ($child) {
        this.$el.appendChild($child);
      }
    }
  };

  setAttributes(): VirtualNode {
    Object.keys(this.props).map((name) => {
      if (isEventProp(name)) {
        return;
      }
      if (isClassNameProp(name)) {
        this.$el.setAttribute('class', this.props[name] as any);
      }
      else if (typeof this.props[name] === 'boolean') {
        setBooleanProp(this.$el, name, this.props[name] as any);
      }
      else {
        this.$el.setAttribute(name, this.props[name] as any);
      }
    });

    return this;
  }

  addEventListeners(): VirtualNode {
    Object.keys(this.props).map((name) => {
      if (isEventProp(name) && typeof this.props[name] === 'function') {
        this.$el.addEventListener(
            extractEventName(name),
            this.props[name] as any
        );
      }
    });

    return this;
  }
}
