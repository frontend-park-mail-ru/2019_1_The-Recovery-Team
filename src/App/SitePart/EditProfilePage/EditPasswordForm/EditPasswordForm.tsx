import SubmitButton, { modes } from 'components/buttons/SubmitButton';
import Form, { InputConfig } from 'components/Form';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import userStore, { actionUserEditPassword } from 'store/userStore';
import { touchField, validateRequired } from 'utils/form/validators';
import validatePasswords from './utils/validatePasswords';

const styles = require('./EditPasswordForm.modules.scss');

const cn = classNames(styles);

interface State {
  oldPassword: InputConfig;
  newPassword: InputConfig;
  repeatNewPassword: InputConfig;
}

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
        [newPassword.name]: nextNewP,
        [repeatNewPassword.name]: nextNewRepeatP,
      });
    }

    const field: InputConfig = this.state[name];
    this.setState({
      [name]: {
        ...field,
        value,
        placeholder: value.length ? field.label : field.placeholder,
        isError: value.length ? false : field.isError,
        touched: true,
      },
    });
  };

  handleBlur = (name: string) =>
    this.setState({
      [name]: validateRequired(this.state[name]),
    });

  updatePassword = () => {
    const { oldPassword, newPassword } = this.state;
    userStore.emit(
      actionUserEditPassword({
        password: newPassword.value,
        passwordOld: oldPassword.value,
      })
    );
  };

  render() {
    const { oldPassword, newPassword, repeatNewPassword } = this.state;
    const saveDisabled =
      oldPassword.isError ||
      newPassword.isError ||
      repeatNewPassword.isError ||
      oldPassword.value.length === 0 ||
      newPassword.value.length === 0 ||
      repeatNewPassword.value.length === 0 ||
      newPassword.value !== repeatNewPassword.value;

    return (
      <div className={cn('edit-password-form')}>
        <Form
          inputs={[oldPassword, newPassword, repeatNewPassword]}
          onChangeValue={this.handleChangeValue}
          onBlur={this.handleBlur}
        />
        <div className={cn('edit-password-form__button')}>
          <SubmitButton
            onClick={this.updatePassword}
            disabled={saveDisabled}
            mode={modes.SAVE}
          >
            Сохранить
          </SubmitButton>
        </div>
      </div>
    );
  }
}
