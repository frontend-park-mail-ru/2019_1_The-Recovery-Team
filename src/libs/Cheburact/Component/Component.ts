import { IComponent, IElement, IUpdater } from 'libs/Cheburact/types';

export default class Component implements IComponent {
  props: any;
  private updater: IUpdater | null;

  constructor(props) {
    this.props = props;
    this.updater = null;
  }

  componentDidMount() {}
  componentDidUpdate(prevProps) {}
  componentWillUnmount() {}

  setUpdater(updater: IUpdater) {
    this.updater = updater;
  }

  getUpdater(): IUpdater | null {
    return this.updater;
  }

  getProps(): any {
    return this.props;
  }

  render(): IElement | null {
    return null;
  }
}
