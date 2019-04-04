import * as React from 'libs/Cheburact';
import { actionRouterPush } from '../actions';
import routerStore from '../cheburouter';

export class Link extends React.Component {
  onClick = e => {
    e.preventDefault();

    routerStore.emit(
      actionRouterPush({
        path: this.props.to,
      })
    );
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
