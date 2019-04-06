import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';

const styles = require('./Tab.modules.scss');

const cn = classNames(styles);

export default class Tab extends React.Component {
  render() {
    const { isActive, children, to } = this.props;
    return (
      <Link
        className={cn('tabbar__tab', isActive && 'tabbar__tab_active')}
        to={to}
      >
        {children}
      </Link>
    );
  }
}
