import Form, { InputConfig } from 'components/Form';
import SimpleButton from 'components/SimpleButton';
import * as React from 'libs/Cheburact';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore, {
  actionUserEditPassword,
  userActions,
  UserErrorPL,
} from 'store/userStore';
import { touchField, validateRequired } from 'utils/form/validators';
import validatePasswords from './utils/validatePasswords';

const styles = require('./EditPasswordForm.modules.scss');

const cn = classNames(styles);

interface State {
  oldPassword: InputConfig;
  newPassword: InputConfig;
  repeatNewPassword: InputConfig;
}

// @ts-ignore
@connectToCheburstore
export default class EditPasswordForm extends React.Component {
  state: State = {
    oldPassword: {
      placeholder: 'Введите старый пароль',
      value: '',
      name: 'oldPassword',
      label: 'Пароль',
      touched: false,
      type: 'password',
      isError: false,
    },
    newPassword: {
      placeholder: 'Введите новый пароль',
      value: '',
      name: 'newPassword',
      label: 'Новый пароль',
      touched: false,
      type: 'password',
      isError: false,
    },
    repeatNewPassword: {
      placeholder: 'Повторите новый пароль',
      value: '',
      name: 'repeatNewPassword',
      label: 'Повторенный новый пароль',
      touched: false,
      type: 'password',
      isError: false,
    },
  };

  handleChangeValue = (name: string, value: string) => {
    const nextField = touchField(this.state[name], value);
    this.setState({
      [name]: nextField,
    });
    const { newPassword, repeatNewPassword } = this.state;
    if (name === newPassword.name || name === repeatNewPassword.name) {
      let nextNewP: null | InputConfig = null;
      let nextNewRepeatP: null | InputConfig = null;
      if (name === newPassword.name) {
        [nextNewP, nextNewRepeatP] = validatePasswords(
          nextField,
          repeatNewPassword
        );
      } else {
        [nextNewP, nextNewRepeatP] = validatePasswords(newPassword, nextField);
      }

      this.setState({
        newPassword: nextNewP,
        repeatNewPassword: nextNewRepeatP,
      });
    }
  };

  validateRequiredAll = () => {
    const newOldPasswrod = validateRequired(this.state.oldPassword);
    const newNewPassword = validateRequired(this.state.newPassword);
    const newRepeatNewPassword = validateRequired(this.state.repeatNewPassword);
    this.setState({
      oldPassword: newOldPasswrod,
      newPassword: newNewPassword,
      repeatNewPassword: newRepeatNewPassword,
    });

    return (
      newOldPasswrod.isError ||
      newNewPassword.isError ||
      newRepeatNewPassword.isError
    );
  };

  handleBlur = (name: string) =>
    this.setState({
      [name]: validateRequired(this.state[name]),
    });

  updatePassword = () => {
    const isError = this.validateRequiredAll();

    if (!isError) {
      const { oldPassword, newPassword } = this.state;
      userStore.emit(
        actionUserEditPassword({
          password: newPassword.value,
          passwordOld: oldPassword.value,
        })
      );
    }
  };

  @onCheburevent(userStore, userActions.EDIT_PASSWORD_ERROR)
  handleFailUpdate(action: Action<UserErrorPL>) {
    this.setState({
      oldPassword: {
        ...this.state.oldPassword,
        currentPlaceholder: action.payload.errorMessage,
        isError: true,
      },
    });
  }

  render() {
    const { oldPassword, newPassword, repeatNewPassword } = this.state;

    return (
      <div className={cn('edit-password-form')}>
        <Form
          inputs={[oldPassword, newPassword, repeatNewPassword]}
          onChangeValue={this.handleChangeValue}
          onBlur={this.handleBlur}
        />
        <div className={cn('edit-password-form__button')}>
          <SimpleButton onClick={this.updatePassword}>Сохранить</SimpleButton>
        </div>
      </div>
    );
  }
}
