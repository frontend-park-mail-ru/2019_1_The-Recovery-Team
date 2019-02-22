import { BOUND_EVENT_LISTENERS } from 'libs/CheburactDOM/config/customFields';

const extractEventName = (name: string): string => name.slice(2).toLowerCase();

const tryAssignBoundEventListener = ($target: HTMLElement, name: string, value: Function) => {
  const listeners = $target[BOUND_EVENT_LISTENERS];

  if (!listeners) {
    Object.assign($target, {
      [BOUND_EVENT_LISTENERS]: {
        [name]: [value]
      }
    });
  }
  else {
    listeners[name] = [
        ...(listeners[name] || []), value
    ];
  }
};

export default ($target: HTMLElement, name: string, value) => {
  if (typeof value === 'function') {
    $target.addEventListener(
        extractEventName(name),
        value as any
    );

    tryAssignBoundEventListener($target, name, value);
  }
};
