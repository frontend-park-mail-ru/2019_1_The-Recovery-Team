import AvatarProfile from 'components/AvatarProfile';
import SubmitButton, { modes } from 'components/buttons/SubmitButton';
import LabelProfile from 'components/LabelProfile';
import * as React from 'libs/Cheburact';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore, { userActions, UserUpdateSuccessPL } from 'store/userStore';
import { CurPage } from '../..';
import MainBlock from '../MainBlock/MainBlock';

const styles = require('./ProfilePage.modules.scss');

const cn = classNames(styles);

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
    const { user } = this.state;
    const { onChangeMode } = this.props;
    const onClick = () => onChangeMode(CurPage.EDIT_PROFILE);

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
              <SubmitButton onClick={onClick} mode={modes.SETTINGS}>
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
