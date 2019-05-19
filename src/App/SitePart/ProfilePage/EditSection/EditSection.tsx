import Form from 'components/Form';
import ModalWindow from 'components/ModalWindow';
import SimpleButton from 'components/SimpleButton';
import API from 'config/API';
import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import routerStore, { actionRouterPush } from 'libs/Cheburouter';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import debounce from 'libs/debounce';
import userStore, { actionUserEdit, userActions } from 'store/userStore';
import { InputConfig } from 'utils/form/types';
import {
  touchField,
  validateAlreadyExists,
  validateRequired,
} from 'utils/form/validators';
import EditPasswordForm from './EditPasswordForm';

interface State {
  email: InputConfig;
  nickname: InputConfig;
  isShownModalPassword: boolean;
}

// @ts-ignore
@connectToCheburstore
export default class EditSection extends React.Component {
  state: State = {
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
  };

  validateAlreadyExists = debounce(async (field: InputConfig) => {
    const { user } = this.props;
    if (!user) {
      return;
    }

    if (
      field.value &&
      field.value !== '' &&
      field.value !== user[field.name] &&
      (field.name === this.state.email.name ||
        field.name === this.state.nickname.name)
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

  toggleEditPasswordModal = () =>
    this.setState({ isShownModalPassword: !this.state.isShownModalPassword });

  updateUser = async () => {
    const { email, nickname } = this.state;
    if (!email.isError && !nickname.isError) {
      userStore.emit(
        actionUserEdit({
          email: email.value,
          nickname: nickname.value,
        })
      );
    }
  };

  render() {
    const { email, nickname, isShownModalPassword } = this.state;

    const { user, outerStyles } = this.props;
    const outerCN = classNames(outerStyles);
    const inputs = user.oauth ? [nickname] : [email, nickname];

    return (
      <div key="edit-mode">
        {isShownModalPassword && (
          <ModalWindow onClose={this.toggleEditPasswordModal}>
            <EditPasswordForm user={user} />
          </ModalWindow>
        )}
        <Form
          className={outerCN('profile-page__item')}
          onChangeValue={this.handleChangeValue}
          onBlur={this.handleBlur}
          inputs={inputs}
        />
        {!user.oauth && (
          <SimpleButton
            onClick={this.toggleEditPasswordModal}
            air={true}
            className={outerCN('profile-page__item')}
          >
            Изменить пароль
          </SimpleButton>
        )}
        <SimpleButton
          onClick={this.updateUser}
          className={outerCN('profile-page__item')}
        >
          Сохранить
        </SimpleButton>
        <SimpleButton to={routeCreators.TO_PROFILE()} air={true}>
          Отменить
        </SimpleButton>
      </div>
    );
  }
}
