import { FiberTypes, IFiberNode } from 'libs/CheburactDOM/types';
import { IComponent } from 'libs/Cheburact/types';
import { BOUND_EVENT_LISTENERS } from 'libs/CheburactDOM/config/customFields';

const unmount = (fiber: IFiberNode) => {
  for (let child of fiber.children) {
    unmount(child);
  }

  if (fiber.type === FiberTypes.COMPONENT) {
    (fiber.stateNode as IComponent).componentWillUnmount();
    return;
  }

  if ((
      fiber.type === FiberTypes.STRING
      || fiber.type === FiberTypes.VIRTUAL_NODE
  ) && fiber.ref) {
    const listeners = fiber.ref[BOUND_EVENT_LISTENERS] || {};

    Object.entries(listeners)
        .map(([key, listeners]) => {
          if (Array.isArray(listeners)) {
            listeners.map((listener) => {
              (fiber.ref as HTMLElement).removeEventListener(key, listener);
            });
          }
        });

    const parent = fiber.ref.parentNode;
    if (parent) {
      parent.removeChild(fiber.ref);
    }
  }
};

export default unmount;
