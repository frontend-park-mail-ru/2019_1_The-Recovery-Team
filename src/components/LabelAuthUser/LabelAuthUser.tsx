import { BASE_URL } from 'config/API';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { CurPage } from '../../App';
const styles = require('./LabelAuthUser.modules.scss');

const cn = classNames(styles);

export default class LabelAuthUser extends React.Component {
  render() {
    const { user, className, onChangeMode, reverse = false } = this.props;
    const onClick = () => onChangeMode(CurPage.PROFILE);
    return (
      <a onClick={onClick} className={`${cn('label-auth')} ${className || ''}`}>
        <div
          className={`${cn('label-auth__container-avatar')} ${
            reverse ? cn('label-auth__container-avatar_left') : ''
          }`}
        >
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
      </a>
    );
  }
}
