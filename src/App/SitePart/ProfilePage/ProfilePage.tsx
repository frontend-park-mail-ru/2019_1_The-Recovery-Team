import AvatarProfile from 'components/AvatarProfile';
import SubmitButton, { modes } from 'components/buttons/SubmitButton';
import LabelProfile from 'components/LabelProfile';
import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore, { Profile, userActions, UserUpdateSuccessPL } from 'store/userStore';
import MainBlock from '../MainBlock/MainBlock';

const styles = require('./ProfilePage.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class ProfilePage extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState({
      user: userStore.select().user,
    });
  }

  @onCheburevent(userStore, userActions.UPDATE_SUCCESS)
  updateUser(action: Action<UserUpdateSuccessPL>) {
    this.setState({
      user: action.payload,
    });
  }

  render() {
    const { user }: { user: Profile } = this.state as any;

    return user ? (
      <MainBlock>
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
                className={cn(
                  'profile-page__field',
                  'profile-page__field_email'
                )}
              >
                {user.email}
              </div>
              <SubmitButton
                to={routeCreators.TO_PROFILE_EDIT()}
                mode={modes.SETTINGS}
              >
                {'Редактировать'}
              </SubmitButton>
            </div>
            <div className={cn('profile-page__container-label')}>
              <LabelProfile user={user} />
            </div>
          </div>
        </div>
      </MainBlock>
    ) : null;
  }
}
