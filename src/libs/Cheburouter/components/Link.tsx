import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { actionRouterPush } from '../actions';
import routerStore from '../routerStore';

const styles = require('./Link.modules.scss');

const cn = classNames(styles);

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
    const { children, className, to, ...rest } = this.props;

    const linkStyles = `${cn('link')} ${className || ''}`;

    return (
      <a className={linkStyles} {...rest} onClick={this.onClick}>
        {children}
      </a>
    );
  }
}
