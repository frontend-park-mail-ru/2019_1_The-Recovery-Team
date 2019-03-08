import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./LabelAuthUser.modules.scss');

const cn = classNames(styles);

export default class LabelAuthUser extends React.Component {
  render() {
    const {user, className} = this.props;

    return (
        <a href='#' className={`${cn('label-auth')} ${className}`}>
          <div className={cn('label-auth__container-avatar')}>
            <img src={user.avatar} className={cn('label-auth__image')} />
          </div>
          <div className={cn('label-auth__rect')}>
            <span className={cn('label-auth__nickname')}>
              {user.nickname}
            </span>
          </div>
        </a>
    );
  }
}
