export type ActionListener = (action: Action<any>) => any;

export interface Action<T> {
  type: string;
  payload: T;
}

export interface ICheburstore<T> {
  emit(action: Action<any>);
  on(type: string, handler: ActionListener): ICheburstore<T>;
  off(type: string, handler: ActionListener): ICheburstore<T>;

  select(): T;
}
