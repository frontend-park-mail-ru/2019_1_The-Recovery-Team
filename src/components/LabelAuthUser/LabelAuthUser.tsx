import { BASE_URL } from 'config/API';
import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./LabelAuthUser.modules.scss');

const cn = classNames(styles);

export default class LabelAuthUser extends React.Component {
  render() {
<<<<<<< HEAD
    const { user, className, onChangeMode, reverse = false } = this.props;
    const onClick = () => onChangeMode(CurPage.PROFILE);
    return (
      <a onClick={onClick} className={`${cn('label-auth')} ${className || ''}`}>
        <div
          className={`${cn('label-auth__container-avatar')} ${
            reverse ? cn('label-auth__container-avatar_left') : ''
          }`}
        >
=======
    const { user, className, to } = this.props;
    return (
      <Link to={to} className={`${cn('label-auth')} ${className}`}>
        <div className={cn('label-auth__container-avatar')}>
>>>>>>> dev
          <img
            src={`${BASE_URL}${user.avatar}` || ''}
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
