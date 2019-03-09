import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./AvatarProfile.modules.scss');

const cn = classNames(styles);

export default class AvatarProfile extends React.Component {
  render() {
  const { user, defaultImg } = this.props;
  const avatar = user.avatar && user.avatar.length ? user.avatar : defaultImg;

    return (
        <div className={cn('avatar-profile')} >
          <img src={avatar} className={cn('avatar-profile__image')}/>
        </div>
    );
  }
}