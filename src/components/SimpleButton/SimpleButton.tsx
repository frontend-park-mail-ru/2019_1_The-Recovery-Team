import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';

const styles = require('./SimpleButton.modules.scss');
const cn = classNames(styles);

export default class SimpleButton extends React.Component {
  handleClick = e => {
    const { onClick = () => null, disabled = false } = this.props;
    if (!disabled) {
      onClick(e);
    }
  };

  render() {
    const {
      children,
      addonImage = null,
      air = false,
      className = '',
      disabled = false,
      to = null,
    } = this.props;

    // noinspection TsLint
    const Component = to ? Link : 'div';
    const props = to ? { to } : { onClick: this.handleClick };

    return (
      <Component
        {...props}
        className={`${className} ${cn(
          'simple-button',
          air && 'simple-button_air',
          disabled && 'simple-button_disabled'
        )}`}
      >
        {addonImage && (
          <img className={cn('simple-button__addon')} src={addonImage} />
        )}
        {children}
      </Component>
    );
  }
}
