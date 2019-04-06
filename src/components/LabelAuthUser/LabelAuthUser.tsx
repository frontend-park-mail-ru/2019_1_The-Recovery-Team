import { BASE_URL } from 'config/API';
import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./LabelAuthUser.modules.scss');

const cn = classNames(styles);

export default class LabelAuthUser extends React.Component {
  render() {
    const { user, className, to } = this.props;
    return (
      <Link to={to} className={`${cn('label-auth')} ${className}`}>
        <div className={cn('label-auth__container-avatar')}>
          <img
            src={`${BASE_URL}${user.avatar}`}
            className={cn('label-auth__image')}
          />
        </div>
        <div className={cn('label-auth__rect')}>
          <span className={cn('label-auth__nickname')}>{user.nickname}</span>
        </div>
      </Link>
    );
  }
}
