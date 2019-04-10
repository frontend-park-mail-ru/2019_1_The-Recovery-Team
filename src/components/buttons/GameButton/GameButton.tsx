import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./GameButton.modules.scss');

const cn = classNames(styles);

export default class GameButton extends React.Component {
  render() {
    const { type, isAuthorized = false, to, className = '' } = this.props;

    const classNames = `${className} ${cn(
      'game-button',
      `game-button_${type}`
    )}`;

    return (
      <Link to={to} className={classNames}>
        {isAuthorized ? (
          <div className={cn('game-button__blur')}>{'ВОЙТИ'}</div>
        ) : null}
      </Link>
    );
  }
}
