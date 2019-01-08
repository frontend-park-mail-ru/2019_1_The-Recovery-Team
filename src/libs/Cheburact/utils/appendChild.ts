import {
  IComponent,
  isIComponent,
  isIVirtualNode,
  IVirtualNode,
} from 'libs/Cheburact/types';

const appendChild = (
    $target: HTMLElement,
    child: IComponent | IVirtualNode | string | null | Array<any>,
) => {
  if (typeof child === 'string') {
    $target.appendChild(document.createTextNode(child));
  }
  else if (isIComponent(child)) {
    appendChild($target, child.render());
  }
  else if (Array.isArray(child)) {
    child.map((child) => appendChild($target, child as any));
  }
  else if (isIVirtualNode(child)) {
    const $child = child.asHTML();
    if ($child) {
      $target.appendChild($child);
    }
  }
};

export default appendChild;
