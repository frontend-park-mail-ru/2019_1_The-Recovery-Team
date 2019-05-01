import AvatarProfile from 'components/AvatarProfile';
import Form from 'components/Form';
import MainBlock from 'components/MainBlock';
import ModalWindow from 'components/ModalWindow';
import SimpleButton from 'components/SimpleButton';
import API from 'config/API';
import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import routerStore, { actionRouterPush } from 'libs/Cheburouter';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import debounce from 'libs/debounce';
import userStore, {
  actionUserEdit,
  actionUserLogout,
  Profile,
  userActions,
  UserUpdateSuccessPL,
} from 'store/userStore';
import { InputConfig } from 'utils/form/types';
import {
  touchField,
  validateAlreadyExists,
  validateRequired,
} from 'utils/form/validators';
import EditAvatarForm from '../EditProfilePage/EditAvatarForm';
import EditPasswordForm from '../EditProfilePage/EditPasswordForm';

const styles = require('./ProfilePage.modules.scss');

const cn = classNames(styles);

interface State {
  isEditMode: boolean;

  user: Profile | null;

  email: InputConfig;
  nickname: InputConfig;
  isShownModalPassword: boolean;
  isShownModalAvatar: boolean;
}

// @ts-ignore
@connectToCheburstore
export default class ProfilePage extends React.Component {
  state: State = {
    isEditMode: false,
    user: null,

    email: {
      placeholder: 'Email',
      isError: false,
      value: (userStore.select().user as any).email,
      name: 'email',
      touched: false,
      label: 'Email',
      type: 'email',
    },
    nickname: {
      placeholder: 'Никнейм',
      isError: false,
      value: (userStore.select().user as any).nickname,
      name: 'nickname',
      touched: false,
      label: 'Никнейм',
      type: 'text',
    },
    isShownModalPassword: false,
    isShownModalAvatar: false,
  };

  componentDidMount() {
    this.setState({
      user: userStore.select().user,
    });
  }

  @onCheburevent(userStore, userActions.UPDATE_SUCCESS)
  handleUserUpdated(action: Action<UserUpdateSuccessPL>) {
    this.setState({
      user: action.payload,
    });
  }

  toEditMode = () => this.setState({ isEditMode: true });

  toViewMode = () => this.setState({ isEditMode: false });

  handleLogout = () => userStore.emit(actionUserLogout());

  get modeTitle() {
    return this.state.isEditMode ? 'Редактирование профиля' : 'Профиль';
  }

  validateAlreadyExists = debounce(async (field: InputConfig) => {
    const { user } = this.state;
    if (!user) {
      return;
    }

    if (
      field.value &&
      field.value !== '' &&
      field.value !== user[field.name] &&
      (field.name === 'email' || field.name === 'nickname')
    ) {
      const result = await validateAlreadyExists(API.profiles())(field);
      this.setState({
        [field.name]: result,
      });
    }
  }, 500);

  handleChangeValue = (name: string, value: string) => {
    const nextField = touchField(this.state[name], value);

    this.setState({
      [name]: nextField,
    });

    this.validateAlreadyExists(nextField);
  };

  handleBlur = (name: string) =>
    this.setState({
      [name]: validateRequired(this.state[name]),
    });

  @onCheburevent(userStore, userActions.UPDATE_SUCCESS)
  handleUserUpdateSuccess() {
    routerStore.emit(
      actionRouterPush({
        path: routeCreators.TO_PROFILE(),
      })
    );
  }

  updateUser = async () => {
    if (this.saveDisabled) {
      return;
    }

    const { email, nickname } = this.state;
    userStore.emit(
      actionUserEdit({
        email: email.value,
        nickname: nickname.value,
      })
    );
  };

  toggleEditPasswordModal = () =>
    this.setState({ isShownModalPassword: !this.state.isShownModalPassword });
  toggleEditAvatarModal = () =>
    this.setState({ isShownModalAvatar: !this.state.isShownModalAvatar });

  get saveDisabled() {
    const { email, nickname } = this.state;
    return (
      email.isError ||
      nickname.isError ||
      email.value.length === 0 ||
      nickname.value.length === 0
    );
  }

  render() {
    const {
      user,
      isEditMode,
      email,
      nickname,
      isShownModalAvatar,
      isShownModalPassword,
    } = this.state;

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
          {!isEditMode ? (
            <div key="view-mode">
              <div className={cn('heading-item', 'heading-item_left')}>
                <p className={cn('heading-item__title')}>Никнейм</p>
                <p className={cn('heading-item__text')}>{user.nickname}</p>
              </div>
              <div className={cn('heading-item', 'heading-item_left')}>
                <p className={cn('heading-item__title')}>Электронная почта</p>
                <p className={cn('heading-item__text')}>{user.email}</p>
              </div>
              <div className={cn('heading-item', 'heading-item_left')}>
                <p className={cn('heading-item__title')}>Пароль</p>
                <p className={cn('heading-item__text')}>**********</p>
              </div>
              <SimpleButton
                onClick={this.toEditMode}
                className={cn('profile-page__item')}
              >
                Редактировать
              </SimpleButton>
              <SimpleButton onClick={this.handleLogout} air={true}>
                Выйти
              </SimpleButton>
            </div>
          ) : (
            <div key="edit-mode">
              {isShownModalPassword && (
                <ModalWindow onClose={this.toggleEditPasswordModal}>
                  <EditPasswordForm user={user} />
                </ModalWindow>
              )}
              {isShownModalAvatar && (
                <ModalWindow onClose={this.toggleEditAvatarModal}>
                  {<EditAvatarForm user={user} />}
                </ModalWindow>
              )}
              <Form
                className={cn('profile-page__item')}
                onChangeValue={this.handleChangeValue}
                onBlur={this.handleBlur}
                inputs={[email, nickname]}
              />
              <SimpleButton
                onClick={this.toggleEditPasswordModal}
                air={true}
                className={cn('profile-page__item')}
              >
                Изменить пароль
              </SimpleButton>
              <SimpleButton
                disabled={this.saveDisabled}
                onClick={this.updateUser}
                className={cn('profile-page__item')}
              >
                Сохранить
              </SimpleButton>
              <SimpleButton onClick={this.toViewMode} air={true}>
                Отменить
              </SimpleButton>
            </div>
          )}
        </div>
      </MainBlock>
    ) : null;
  }
}
