import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./PlayButtonNew.modules.scss');

const cn = classNames(styles);

export default class PlayButtonNew extends React.Component {
  render() {
    const {
      className = '',
      type,
      blur = false,
      blurText = '',
      onClick = () => null,
      to,
    } = this.props;
    const classes = `${className} ${cn(
      'play-button',
      `play-button_${type}`,
      blur && 'play-button_blur'
    )}`;

    // tslint:disable-next-line:variable-name
    const Component = to ? Link : 'div';
    const params = to ? { to } : { onClick };

    return (
      <Component {...params} className={classes}>
        {!!blurText && (
          <div className={cn('play-button__blur-text')}>{blurText}</div>
        )}
      </Component>
    );
  }
}
