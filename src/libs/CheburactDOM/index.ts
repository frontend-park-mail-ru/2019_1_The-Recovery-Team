import {
  IComponent,
  IVirtualNode,
} from 'libs/Cheburact/types';
import appendChild from 'libs/Cheburact/utils/appendChild';

const render = (element: IVirtualNode | IComponent | string | null, container: HTMLElement | null) => {
  if (!container) {
    return;
  }

  window.onload = () => appendChild(container, element);
};

export {
  render,
};
