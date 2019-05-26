import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./CircleButton.modules.scss');

const cn = classNames(styles);

export default class CircleButton extends React.Component {
  render() {
    const {
      className = '',
      type,
      onClick,
      isActive = false,
      style = null,
    } = this.props;
    const classes = `${className} ${cn(
      'circle-button',
      `circle-button_${type}`,
      isActive && 'circle-button_active',
      style && `circle-button_${style}`
    )}`;

    return <button className={classes} onClick={onClick} />;
  }
}
