import { BOUND_EVENT_LISTENERS } from 'libs/CheburactDOM/config/customFields';
import extractEventName from 'libs/CheburactDOM/utils/props/extractEventName';

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
    if (name === 'onFocus') {
      $target.addEventListener(
          'onfocus',
          () => {
            value();
            $target.focus();
          }
      );
    }
    if (name === 'onBlur') {
      $target.addEventListener(
          'onblur',
          () => {
            value();
            $target.blur();
          }
      );
    }

    $target.addEventListener(
        extractEventName(name),
        value as any
    );

    tryAssignBoundEventListener($target, name, value);
  }
};
