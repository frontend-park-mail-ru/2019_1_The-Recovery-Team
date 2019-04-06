import * as React from 'libs/Cheburact';
import { actionRouterPush } from '../actions';
import routerStore from '../routerStore';

export class Link extends React.Component {
  onClick = e => {
    e.preventDefault();

    const { to } = this.props;
    if (to) {
      routerStore.emit(
        actionRouterPush({
          path: to,
        })
      );
    }
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <a {...rest} onClick={this.onClick}>
        {children}
      </a>
    );
  }
}
