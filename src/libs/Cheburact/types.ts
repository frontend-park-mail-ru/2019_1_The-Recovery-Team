export type PureFunc = (props: any) => HTMLElement | Text | null;

export interface VirtualNodeProps {
  [name: string]: string | boolean | Function;
}

export interface IVirtualNode {
  asHTML(): HTMLElement | Text | null;
}

export const isIVirtualNode = (obj): obj is IVirtualNode =>
    (<IVirtualNode>obj).asHTML !== undefined;

export interface IComponent {
  render(): IComponent | IVirtualNode | string | null;
}

export const isIComponent = (obj): obj is IComponent =>
    (<IComponent>obj).render !== undefined;
