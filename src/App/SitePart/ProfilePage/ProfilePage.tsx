import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import AvatarProfile from 'components/AvatarProfile';
import EditButton from 'components/buttons/EditButton';
import SubmitButton, {modes} from 'components/buttons/SubmitButton';
import LabelProfile from 'components/LabelProfile';
const styles = require('./ProfilePage.modules.scss');

const cn = classNames(styles);

export default class ProfilePage extends React.Component {
  render() {
    const { user } = this.props;

    return (
        <div className={cn('profile-page')}>
          <div className={cn('profile-page__container')}>
            <div className={cn('profile-page__container-avatar')}>
              <AvatarProfile user={user} />
              <div className={cn('profile-page__container-edit-button')}>
                <EditButton/>
              </div>
            </div>
            <div className={cn('profile-page__container-information')}>
              <div className={cn('profile-page__field', 'profile-page__field_nickname')}>{user.nickname}</div>
              <div className={cn('profile-page__field', 'profile-page__field_email')}>{user.email}</div>
              <SubmitButton mode={modes.SETTINGS}/>
            </div>
            <div className={cn('profile-page__container-label')}>
              <LabelProfile user={user}/>
            </div>
          </div>
        </div>
    );
  }
}
