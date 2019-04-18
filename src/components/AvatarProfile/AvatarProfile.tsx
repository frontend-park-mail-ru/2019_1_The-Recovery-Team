import { BASE_URL } from 'config/API';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./AvatarProfile.modules.scss');

const cn = classNames(styles);

export default class AvatarProfile extends React.Component {
  render() {
    const { user, className = '' } = this.props;

    const classes = `${className} ${cn('avatar-profile')}`;

    return (
      <div className={classes}>
        <img
          src={`${BASE_URL}${user.avatar}`}
          className={cn('avatar-profile__image')}
        />
      </div>
    );
  }
}
