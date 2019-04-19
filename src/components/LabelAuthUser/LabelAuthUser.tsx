import { BASE_URL } from 'config/API';
import { defaultAvatar } from 'config/images';
import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./LabelAuthUser.modules.scss');

const cn = classNames(styles);

export default class LabelAuthUser extends React.Component {
  render() {
    const { user, className = '', to, reverse = false } = this.props;

    const avatarClasses = cn(
      'label-auth__container-avatar',
      reverse && 'label-auth__container-avatar_left'
    );
    const labelClasses = `${cn('label-auth')} ${className}`;

    return (
      <Link to={to} className={labelClasses}>
        <div className={avatarClasses}>
          <img
            src={`${BASE_URL}${user.avatar}` || defaultAvatar}
            className={cn('label-auth__image')}
          />
        </div>
        <div
          className={`${cn('label-auth__rect')} ${
            reverse ? cn('label-auth__rect_left') : ''
          }`}
        >
          <span className={cn('label-auth__nickname')}>{user.nickname}</span>
        </div>
      </Link>
    );
  }
}
