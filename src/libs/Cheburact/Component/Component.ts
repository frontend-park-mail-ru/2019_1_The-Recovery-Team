import { IComponent, IElement, IUpdater } from 'libs/Cheburact/types';

export default class Component implements IComponent {
  props: any = null;
  state: any = null;
  private updater: IUpdater | null;
  private readonly symbol: Symbol;

  constructor(props) {
    this.props = props;
    this.updater = null;
    this.symbol = Symbol(`Component`);
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

  getSymbol(): Symbol {
    return this.symbol;
  }

  getProps() {
    return this.props;
  }

  getState() {
    return this.state || {};
  }

  setState(nextState) {
    if (this.updater) {
      const newState = {
        ...(this.state || {}),
        ...(nextState || {}),
      };
      this.updater.enqueueUpdate(this, newState);
    }
  }

  writeState(newState) {
    this.state = newState;
  }

  render(): IElement | null {
    return null;
  }
}
