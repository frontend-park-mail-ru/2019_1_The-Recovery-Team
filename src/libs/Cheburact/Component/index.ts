import { IComponent, IVirtualNode } from 'libs/Cheburact/types';

export default class Component implements IComponent {
  props: any;

  constructor(props) {
    this.props = props;
  }

  render(): IComponent | IVirtualNode | string | null {
    return null;
  }
}
