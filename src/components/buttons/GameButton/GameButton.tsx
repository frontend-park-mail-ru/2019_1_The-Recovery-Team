import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./GameButton.modules.scss');

const cn = classNames(styles);

export default class GameButton extends React.Component {
  render() {
    const {
      img,
      type,
      isAuthorized = false,
      to,
      buttonClass = '',
    } = this.props;

    const buttonClasses = `${buttonClass} ${cn('game-button')}`;

    const iconClasses = cn('game-button__icon', `game-button_${type}-size`);

    return (
      <Link to={to} className={buttonClasses}>
        <img src={`${img}`} className={iconClasses} />
      </Link>
    );
  }
}
