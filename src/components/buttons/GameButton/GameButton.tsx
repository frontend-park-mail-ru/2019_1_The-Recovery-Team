import { BASE_URL } from 'config/API';
import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./GameButton.modules.scss');

const cn = classNames(styles);

export default class GameButton extends React.Component {
  render() {
    const { img, type, isAuthorized = false, to, className = '' } = this.props;

    const buttonClasses = `${className} ${cn('game-button')}`;

    const iconClasses = cn('game-button__icon', `game-button_${type}-size`);

    return (
      <Link to={to} className={buttonClasses}>
        <img src={`${BASE_URL}${img}`} className={iconClasses} />
      </Link>
    );
  }
}
