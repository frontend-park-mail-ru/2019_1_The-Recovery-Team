import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { BASE_URL } from 'config/API';
const styles = require('./AvatarProfile.modules.scss');

const cn = classNames(styles);

export default class AvatarProfile extends React.Component {
  render() {
    const { user } = this.props;

    return (
        <div className={cn('avatar-profile')} >
          <img src={`${BASE_URL}${user.avatar}`} className={cn('avatar-profile__image')}/>
        </div>
    );
  }
}
