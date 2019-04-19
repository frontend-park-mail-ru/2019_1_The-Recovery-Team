import AvatarProfile from 'components/AvatarProfile/AvatarProfile';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const styles = require('./MemberInfo.modules.scss');

const cn = classNames(styles);

export default class MemberInfo extends React.Component {
  render() {
    const { member, memberClass = '' } = this.props;
    const memberClasses = `${cn('member')} ${memberClass}`;

    return (
      <div className={memberClasses}>
        <AvatarProfile user={member} avatarClass={cn('member__avatar')} />
        <div className={cn('member__info')}>
          <div className={cn('member__name')}>{member.name}</div>
          <div className={cn('member__description')}>{member.description}</div>
        </div>
      </div>
    );
  }
}
