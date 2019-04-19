import { BASE_URL } from 'config/API';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./AvatarProfile.modules.scss');

const cn = classNames(styles);

export default class AvatarProfile extends React.Component {
  render() {
    const { user, avatarClass = '' } = this.props;

    const avatarClasses = `${avatarClass} ${cn('avatar-profile')}`;

    return (
      <div className={avatarClasses}>
        <img
          src={`${user.avatar}`}
          className={cn('avatar-profile__image')}
        />
      </div>
    );
  }
}
