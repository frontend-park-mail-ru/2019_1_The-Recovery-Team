import AvatarProfile from 'components/AvatarProfile';
import SubmitButton, { modes } from 'components/buttons/SubmitButton';
import LabelProfile from 'components/LabelProfile';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import userStore from 'store/userStore';
import { CurPage } from '../..';

const styles = require('./ProfilePage.modules.scss');

const cn = classNames(styles);

export default class ProfilePage extends React.Component {
  state = {
    user: userStore.select().user,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.state;
    const { onChangeMode } = this.props;
    const onClick = () => onChangeMode(CurPage.EDIT_PROFILE);

    return user ? (
      <div className={cn('profile-page')}>
        <div className={cn('profile-page__container')}>
          <div className={cn('profile-page__container-avatar')}>
            <AvatarProfile user={user} />
          </div>
          <div className={cn('profile-page__container-information')}>
            <div
              className={cn(
                'profile-page__field',
                'profile-page__field_nickname'
              )}
            >
              {user.nickname}
            </div>
            <div
              className={cn('profile-page__field', 'profile-page__field_email')}
            >
              {user.email}
            </div>
            <SubmitButton onClick={onClick} mode={modes.SETTINGS}>
              {'Редактировать'}
            </SubmitButton>
          </div>
          <div className={cn('profile-page__container-label')}>
            <LabelProfile user={user} />
          </div>
        </div>
      </div>
    ) : null;
  }
}
