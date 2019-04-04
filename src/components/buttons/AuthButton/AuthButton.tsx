import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { Link } from 'libs/Cheburouter';
const styles = require('./AuthButton.modules.scss');

const cn = classNames(styles);

export default class AuthButton extends React.Component {
  render() {
    const { isActive, children, className, to } = this.props;
    let classes = cn('auth-button', isActive && 'auth-button_active');

    if (className) {
      classes = `${classes} ${className}`;
    }

    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
}
