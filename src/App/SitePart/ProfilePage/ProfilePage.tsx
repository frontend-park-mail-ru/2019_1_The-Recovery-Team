import AvatarProfile from 'components/AvatarProfile';
import MainBlock from 'components/MainBlock';
import ModalWindow from 'components/ModalWindow';
import { routesMap } from 'config/routes';
import * as React from 'libs/Cheburact';
import routerStore, {
  match,
  Route,
  routerActions,
  RouterPathPL,
} from 'libs/Cheburouter';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore, { userActions } from 'store/userStore';
import EditAvatarForm from './EditAvatarForm';
import EditSection from './EditSection';
import ViewSection from './ViewSection';

const styles = require('./ProfilePage.modules.scss');

const cn = classNames(styles);

interface State {
  isEditMode: boolean;
  isShownModalAvatar: boolean;
}

// @ts-ignore
@connectToCheburstore
export default class ProfilePage extends React.Component {
  state: State = {
    isEditMode: false,
    isShownModalAvatar: false,
  };

  @onCheburevent(userStore, userActions.UPDATE_SUCCESS)
  handleUserUpdated() {
    this.setState({});
  }

  @onCheburevent(routerStore, routerActions.PUSH_OK)
  handlePathChanged(action: Action<RouterPathPL>) {
    this.setState({
      isEditMode: !!match(routesMap.PROFILE_EDIT.template, action.payload.path),
    });
  }

  get modeTitle() {
    return this.state.isEditMode ? 'Редактирование профиля' : 'Профиль';
  }

  toggleEditAvatarModal = () =>
    this.setState({ isShownModalAvatar: !this.state.isShownModalAvatar });

  render() {
    const { isEditMode, isShownModalAvatar } = this.state;
    const { user } = userStore.select();

    return user ? (
      <MainBlock className={cn('profile-page')}>
        <div className={cn('profile-page__container')}>
          <p className={cn('profile-page__title')}>{this.modeTitle}</p>
          <div className={cn('profile-page__header')}>
            <div
              className={cn(
                'heading-item',
                'heading-item_tiny',
                'heading-item_left'
              )}
            >
              <p className={cn('heading-item__title')}>Место</p>
              <p className={cn('heading-item__text')}>{`${user.record ||
                0}`}</p>
            </div>
            <AvatarProfile
              src={user.avatar}
              onButtonClick={isEditMode && this.toggleEditAvatarModal}
              buttonClass={cn('profile-page__avatar-edit-icon')}
            />
            <div
              className={cn(
                'heading-item',
                'heading-item_tiny',
                'heading-item_right'
              )}
            >
              <p className={cn('heading-item__title')}>Побед</p>
              <p className={cn('heading-item__text')}>{`${user.win || 0}`}</p>
            </div>
          </div>
          {isShownModalAvatar && (
            <ModalWindow onClose={this.toggleEditAvatarModal}>
              {<EditAvatarForm user={user} />}
            </ModalWindow>
          )}
          <Route
            template={routesMap.PROFILE.template}
            exact={true}
            component={ViewSection}
            user={user}
            outerStyles={styles}
          />
          <Route
            template={routesMap.PROFILE_EDIT.template}
            component={EditSection}
            user={user}
            outerStyles={styles}
          />
        </div>
      </MainBlock>
    ) : null;
  }
}
