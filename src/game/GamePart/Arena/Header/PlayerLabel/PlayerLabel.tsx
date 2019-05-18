import { anonymousAvatar } from 'config/images';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const styles = require('./PlayerLabel.modules.scss');
const cn = classNames(styles);

export default class PlayerLabel extends React.Component {
  render() {
    const { user = null, isEnemy = false, className = '' } = this.props;
    const avatar =
      user && user.avatar && user.avatar.length ? user.avatar : anonymousAvatar;

    return user ? (
      <div
        className={`${className} ${cn(
          'player-label',
          isEnemy && 'player-label_enemy'
        )}`}
      >
        <div
          className={cn(
            'player-label__avatar-container',
            isEnemy && 'player-label__avatar-container_enemy'
          )}
        >
          <img
            className={cn('player-label__avatar')}
            alt="avatar"
            src={avatar}
          />
        </div>
        <span
          className={cn(
            'player-label__label',
            isEnemy && 'player-label__label_enemy'
          )}
        >
          {user.nickname}
        </span>
      </div>
    ) : null;
  }
}
