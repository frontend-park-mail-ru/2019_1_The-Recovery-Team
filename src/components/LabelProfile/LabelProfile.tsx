import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./LabelProfile.modules.scss');

const cn = classNames(styles);

export default class LabelProfile extends React.Component {
  render() {
    const { user } = this.props;
    const rating = Math.floor(user.win / (user.loss + user.win) * 100) || 0;

    return (
        <div className={cn('label-profile')}>
          <div className={cn('label-profile__content')}>
            <div className={cn('label-profile__star-icon')} />
            <div className={cn('label-profile__stat')}>
              <div className={cn('label-profile__pos')}>{`${rating}%`}</div>
              <div className={cn('label-profile__rating')}>{`Рейтинг ${user.record}`}</div>
            </div>
          </div>
        </div>
    );
  }
}
