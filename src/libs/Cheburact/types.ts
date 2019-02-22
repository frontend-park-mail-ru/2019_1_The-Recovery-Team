export interface IUpdater {
  enqueueUpdate(element: IElement);
}

export interface VirtualNodeProps {
  [name: string]: string | boolean | Function;
}

export interface IVirtualNode {
  type: string;
  props: VirtualNodeProps;
  children: Array<IElement>;
  ref: null | ((node: IDOMNode) => any);
}

export const isIVirtualNode = (obj): obj is IVirtualNode =>
    (<IVirtualNode>obj).type !== undefined &&
    (<IVirtualNode>obj).props !== undefined &&
    (<IVirtualNode>obj).children !== undefined;

export interface IComponent {
  render(): IElement | null;
  setUpdater(updater: IUpdater);
  getUpdater(): IUpdater | null;
  getProps(): any;
  componentDidMount();
  componentDidUpdate(prevProps);
  componentWillUnmount();
}

export const isIComponent = (obj): obj is IComponent =>
    (<IComponent>obj).render !== undefined;

export type IDOMNode = HTMLElement | Text;
export type IElement = IVirtualNode | IComponent | string;
