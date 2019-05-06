import AvatarProfile from 'components/AvatarProfile';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const styles = require('./MemberInfo.modules.scss');

const cn = classNames(styles);

export default class MemberInfo extends React.Component {
  render() {
    const { member, className = '' } = this.props;
    const memberClasses = `${cn('member')} ${className}`;

    return (
      <div className={memberClasses}>
        <AvatarProfile src={member.avatar} className={cn('member__avatar')} />
        <div className={cn('member__info')}>
          <a href={member.link} target="_blank" className={cn('member__name')}>
            {member.name}
          </a>
          <p className={cn('member__description')}>{member.description}</p>
        </div>
      </div>
    );
  }
}
