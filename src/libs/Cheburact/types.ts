export interface IUpdater {
  enqueueUpdate(element: IComponent, nextState?: Object);
}

export interface VirtualNodeProps {
  [name: string]: string | boolean | Function;
}

export interface IVirtualNode {
  type: string;
  props: VirtualNodeProps;
  children: IElement[];
  ref: null | ((node: IDOMNode) => any);
  key: null | string | number;
}

export const isIVirtualNode = (obj): obj is IVirtualNode =>
  (obj as IVirtualNode).type !== undefined &&
  typeof obj.type === 'string' &&
  (obj as IVirtualNode).props !== undefined &&
  (obj as IVirtualNode).children !== undefined;

export interface IComponent {
  render(): IElement | null;
  setUpdater(updater: IUpdater);
  getUpdater(): IUpdater | null;
  getSymbol(): Symbol;
  getProps();
  getState();
  setState(nextState);
  writeState(newState);
  componentDidMount();
  componentDidUpdate(prevProps);
  componentWillUnmount();
}

export const isIComponent = (obj): obj is IComponent =>
  (obj as IComponent).render !== undefined;

export type IDOMNode = HTMLElement | Text;
export type IElement = IVirtualNode | IComponent | string;
