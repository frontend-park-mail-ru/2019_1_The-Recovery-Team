import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./PlayButton.modules.scss');

const cn = classNames(styles);

export default class PlayButton extends React.Component {
  render() {
    const {
      mode,
      className = '',
      to,
      isBlur = false,
      title = null,
    } = this.props;

    const buttonClasses = `${className} ${cn(
      'play-button',
      `play-button_${mode}`,
      isBlur && 'play-button_blur'
    )}`;

    return (
      <Link className={buttonClasses} to={to}>
        <div className={cn('play-button__title')}>{title}</div>
      </Link>
    );
  }
}
