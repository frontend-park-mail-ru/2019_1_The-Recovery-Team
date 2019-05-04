import Form from 'components/Form';
import SimpleButton from 'components/SimpleButton';
import * as React from 'libs/Cheburact';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore, {
  actionUserLogin,
  userActions,
  UserErrorPL,
} from 'store/userStore';
import { InputConfig } from 'utils/form/types';
import {
  recoverField,
  setInputError,
  touchField,
  validateRequired,
} from 'utils/form/validators';
import ContinueWithVK from '../ContinueWithVK';

const styles = require('./SignInForm.modules.scss');

const cn = classNames(styles);

interface State {
  email: InputConfig;
  password: InputConfig;
}

// @ts-ignore
@connectToCheburstore
export default class SignInForm extends React.Component {
  state: State = {
    email: {
      placeholder: 'Email',
      value: '',
      isError: false,
      name: 'email',
      touched: false,
      label: 'Email',
      type: 'email',
    },
    password: {
      placeholder: 'Пароль',
      value: '',
      isError: false,
      name: 'password',
      touched: false,
      label: 'Пароль',
      type: 'password',
    },
  };

  handleChangeValue = (name: string, value: string) => {
    if (name === 'email') {
      this.setState({
        [name]: touchField(this.state[name], value),
        password: recoverField(this.state.password),
      });
    } else {
      this.setState({
        [name]: touchField(this.state[name], value),
        email: recoverField(this.state.email),
      });
    }
  };

  handleBlur = (name: string) =>
    this.setState({
      [name]: validateRequired(this.state[name]),
    });

  validateRequiredAll = () => {
    const newEmail = validateRequired(this.state.email);
    const newPassword = validateRequired(this.state.password);
    this.setState({
      email: newEmail,
      password: newPassword,
    });

    return newEmail.isError || newPassword.isError;
  };

  handleSubmit = () => {
    const isError = this.validateRequiredAll();
    const { email, password } = this.state;
    if (!isError) {
      userStore.emit(
        actionUserLogin({
          password: password.value,
          email: email.value,
        })
      );
    }
  };

  @onCheburevent(userStore, userActions.LOGIN_ERROR)
  handleLoginError(action: Action<UserErrorPL>) {
    this.setState({
      email: setInputError(this.state.email, action.payload.errorMessage),
      password: setInputError(this.state.password),
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className={cn('sign-in-form')}>
        <Form
          className={cn('sign-in-form__form')}
          onChangeValue={this.handleChangeValue}
          onBlur={this.handleBlur}
          inputs={[email, password]}
        />
        <SimpleButton onClick={this.handleSubmit}>Продолжить</SimpleButton>
        <ContinueWithVK />
      </div>
    );
  }
}
