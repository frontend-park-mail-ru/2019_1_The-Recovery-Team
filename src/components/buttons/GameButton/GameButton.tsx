import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./GameButton.modules.scss');

const cn = classNames(styles);

export default class GameButton extends React.Component {
  render() {
    const { type, isAuthorized = false } = this.props;

    return (
      <div className={cn('game-button', `game-button_${type}`)}>
        {isAuthorized ? (
          <div className={cn('game-button__blur')}>{'ВОЙТИ'}</div>
        ) : null}
      </div>
    );
  }
}
