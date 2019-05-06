import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./GameButton.modules.scss');

const cn = classNames(styles);

export default class GameButton extends React.Component {
  render() {
    const { img, type, to, onClick = () => null, className = '' } = this.props;

    const buttonClasses = `${className} ${cn('game-button')}`;

    const iconClasses = cn('game-button__icon', `game-button_${type}-size`);

    // tslint:disable-next-line:variable-name
    const Component = to ? Link : 'div';
    const params = to ? { to } : { onClick };

    return (
      <Component {...params} className={buttonClasses}>
        <img src={`${img}`} className={iconClasses} />
      </Component>
    );
  }
}
