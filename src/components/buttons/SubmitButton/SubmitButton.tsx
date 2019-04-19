import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./SubmitButton.modules.scss');

const cn = classNames(styles);

export default class SubmitButton extends React.Component {
  render() {
    const {
      mode,
      onClick = null,
      to = null,
      disabled = false,
      children,
      className = '',
    } = this.props;
    const buttonClasses = `${className} ${cn(
      'submit-button',
      `submit-button_${mode.theme}`,
      disabled && 'submit-button_disabled'
    )}`;

    // noinspection TsLint
    const Component = to ? Link : 'button';
    const props = {};
    if (to) {
      Object.assign(props, { to });
    }
    if (onClick) {
      Object.assign(props, { onClick: !disabled && onClick });
    }

    return (
      <Component {...props} className={buttonClasses}>
        <div className={cn('submit-button__container-icon')}>
          <div className={cn(`submit-button__${mode.className}`)} />
        </div>
        <div className={cn('submit-button__title')}>{children}</div>
      </Component>
    );
  }
}
