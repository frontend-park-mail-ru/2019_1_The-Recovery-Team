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
      href = null,
    } = this.props;

    // tslint:disable-next-line:variable-name
    let Component: any = 'div';
    const params: any = {};
    if (to) {
      Component = Link;
      params.to = to;
    } else if (href) {
      Component = 'a';
      params.href = href;
    } else {
      params.onClick = this.handleClick;
    }

    return (
      <Component
        {...params}
        className={`${className} ${cn(
          'simple-button',
          air && 'simple-button_air',
          disabled && 'simple-button_disabled',
          addonImage && 'simple-button_has-addon'
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
