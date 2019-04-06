import { Action, ActionListener, ICheburstore } from 'libs/Cheburstore/types';

export default class Cheburstore<T> implements ICheburstore<T> {
  protected store: T;

  public listeners: {
    [type: string]: Array<ActionListener>;
  } = {};

  public emit(action: Action<any>) {
    console.log(
      `%c action: ${action.type}`,
      'font-weight: 700; color: green',
      action.payload
    );

    if (!this.listeners[action.type]) {
      return this;
    }

    this.listeners[action.type].forEach(listener => listener(action));
    return this;
  }

  private isAlreadySubscribed(type: string, listener: ActionListener): boolean {
    return (this.listeners[type] || []).indexOf(listener) >= 0;
  }

  public on(type: string, listener: ActionListener): Cheburstore<T> {
    // Дополнительная проврека
    if (typeof listener !== 'function') {
      return this;
    }

    if (!this.listeners[type]) {
      this.listeners[type] = [listener];
      return this;
    }

    if (this.isAlreadySubscribed(type, listener)) {
      return this;
    }

    this.listeners[type].push(listener);

    return this;
  }

  public off(type: string, listener: ActionListener): Cheburstore<T> {
    // Дополнительная проврека
    if (typeof listener !== 'function') {
      return this;
    }

    let listeners: Array<ActionListener> | null = this.listeners[type];
    if (listeners) {
      listeners = listeners.filter(l => l !== listener);

      if (listeners.length === 0) {
        delete this.listeners[type];
      } else {
        this.listeners[type] = listeners;
      }
    }

    return this;
  }

  public select(): T {
    return this.store;
  }
}
