import * as React from 'libs/Cheburact/index';
import { Link } from 'libs/Cheburouter/index';
import classNames from 'libs/classNames/index';

const styles = require('./Tab.modules.scss');

const cn = classNames(styles);

export default class Tab extends React.Component {
  render() {
    const { isActive, children, to, className = '' } = this.props;
    const classes = `${className} ${cn('tab', isActive && 'tab_active')}`;

    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }
}
