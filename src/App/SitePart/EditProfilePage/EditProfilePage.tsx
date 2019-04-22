import AvatarProfile from 'components/AvatarProfile';
import EditButton from 'components/buttons/EditButton';
import SubmitButton, { modes } from 'components/buttons/SubmitButton';
import Form from 'components/Form';
import MainBlock from 'components/MainBlock';
import ModalWindow from 'components/ModalWindow';
import API from 'config/API';
import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import routerStore, { actionRouterPush } from 'libs/Cheburouter';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import debounce from 'libs/debounce';
import userStore, {
  actionUserEdit,
  Profile,
  userActions,
} from 'store/userStore';
import { InputConfig } from 'utils/form/types';
import {
  touchField,
  validateAlreadyExists,
  validateRequired,
} from 'utils/form/validators';
import EditAvatarForm from './EditAvatarForm';
import EditPasswordForm from './EditPasswordForm';

const styles = require('./EditProfilePage.modules.scss');

const cn = classNames(styles);

interface State {
  user: Profile | null;

  email: InputConfig;
  nickname: InputConfig;
  isShownModalPassword: boolean;
  isShownModalAvatar: boolean;
}

// @ts-ignore
@connectToCheburstore
export default class EditProfilePage extends React.Component {
  state: State = {
    user: userStore.select().user,

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

  toggleEditModalPassword = () =>
    this.setState({ isShownModalPassword: !this.state.isShownModalPassword });
  toggleEditModalAvatar = () =>
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
      email,
      nickname,
      isShownModalPassword,
      isShownModalAvatar,
    } = this.state;

    return (
      <MainBlock className={cn('edit-profile-page')}>
        {isShownModalPassword && (
          <ModalWindow onClose={this.toggleEditModalPassword}>
            <EditPasswordForm user={user} />
          </ModalWindow>
        )}
        {isShownModalAvatar && (
          <ModalWindow onClose={this.toggleEditModalAvatar}>
            {<EditAvatarForm user={user} />}
          </ModalWindow>
        )}
        <div className={cn('edit-profile-page__container')}>
          <div className={cn('edit-profile-page__left-container')}>
            <div className={cn('edit-profile-page__container-avatar')}>
              <AvatarProfile user={user} />
              <EditButton
                className={cn('edit-profile-page__container-edit-button')}
                onClick={this.toggleEditModalAvatar}
              />
            </div>
          </div>
          <div className={cn('edit-profile-page__container-edit')}>
            <Form
              className={cn('edit-profile-page__container-form')}
              onChangeValue={this.handleChangeValue}
              onBlur={this.handleBlur}
              inputs={[email, nickname]}
            />
            <div className={cn('edit-profile-page__container-buttons')}>
              <SubmitButton
                onClick={this.toggleEditModalPassword}
                mode={modes.SETTINGS}
              >
                Изменить пароль
              </SubmitButton>
              <div
                className={cn('edit-profile-page__container-submit-buttons')}
              >
                <SubmitButton
                  className={cn('edit-profile-page__container-save-button')}
                  onClick={this.updateUser}
                  mode={modes.SAVE}
                  disabled={this.saveDisabled}
                >
                  Сохранить
                </SubmitButton>
                <SubmitButton
                  to={routeCreators.TO_PROFILE()}
                  mode={modes.CANCEL}
                >
                  Закрыть
                </SubmitButton>
              </div>
            </div>
          </div>
        </div>
      </MainBlock>
    );
  }
}
