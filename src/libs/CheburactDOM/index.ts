import VirtualNode from 'libs/Cheburact/VirtualNode';

const render =  (element: VirtualNode, container: HTMLElement | null) => {
  if (container) {
    window.onload = () => container.appendChild(element.asHTML());
  }
};

export {
  render,
};
