import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./LabelProfile.modules.scss');

const cn = classNames(styles);

export default class LabelProfile extends React.Component {
  render() {
    const { user } = this.props;

    return (
        <div className={cn('label-profile')}>
          <div className={cn('label-profile__content')}>
            <div className={cn('label-profile__star-icon')} />
            <div className={cn('label-profile__stat')}>
              <div className={cn('label-profile__pos')}>{`${user.position}`}</div>
              <div className={cn('label-profile__rating')}>{`Рейтинг ${user.rating}`}</div>
            </div>
          </div>
        </div>
    );
  }
}
