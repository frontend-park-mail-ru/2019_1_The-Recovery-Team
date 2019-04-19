import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./AuthButton.modules.scss');

const cn = classNames(styles);

export default class AuthButton extends React.Component {
  render() {
    const { isActive, children, buttonClass = '', to } = this.props;
    const classes = `${cn(
      'auth-button',
      isActive && 'auth-button_active'
    )} ${buttonClass}`;

    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
}
