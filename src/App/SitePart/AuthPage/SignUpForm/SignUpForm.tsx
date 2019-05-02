import Form from 'components/Form';
import SimpleButton from 'components/SimpleButton';
import UploadAvatar from 'components/UploadAvatar';
import API from 'config/API';
import * as React from 'libs/Cheburact';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import debounce from 'libs/debounce';
import userStore, {
  actionUserSignup,
  userActions,
  UserErrorPL,
} from 'store/userStore';
import { InputConfig } from 'utils/form/types';
import {
  touchField,
  validateAlreadyExists,
  validateRequired,
} from 'utils/form/validators';
import ContinueWithVK from '../ContinueWithVK';

const styles = require('./SignUpForm.modules.scss');

const cn = classNames(styles);

interface State {
  firstSage: boolean;
  email: InputConfig;
  password: InputConfig;
  nickname: InputConfig;
  avatar: ImageData | null;
}

// @ts-ignore
@connectToCheburstore
export default class SignUpForm extends React.Component {
  state: State = {
    firstSage: true,
    email: {
      placeholder: 'Email',
      isError: false,
      value: '',
      name: 'email',
      touched: false,
      label: 'Email',
      type: 'email',
    },
    password: {
      placeholder: 'Придумайте пароль',
      isError: false,
      value: '',
      name: 'password',
      touched: false,
      label: 'Пароль',
      type: 'password',
    },
    nickname: {
      placeholder: 'Придумайте никнейм',
      isError: false,
      value: '',
      name: 'nickname',
      touched: false,
      label: 'Никнейм',
      type: 'text',
    },
    avatar: null,
  };

  toSecondStage = () =>
    !this.nextDisabled && this.setState({ firstSage: false });

  handleSubmit = async () => {
    const { email, nickname, password, avatar } = this.state;
    if (!nickname.value || nickname.value.length === 0) {
      return;
    }

    userStore.emit(
      actionUserSignup({
        avatar,
        email: email.value,
        nickname: nickname.value,
        password: password.value,
      })
    );
  };

  @onCheburevent(userStore, userActions.SIGNUP_ERROR)
  handleSignupError(action: Action<UserErrorPL>) {
    // TODO:
  }

  validateAlreadyExists = debounce(async (field: InputConfig) => {
    if (
      field.value &&
      field.value !== '' &&
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

  handleSelectPhoto = avatar => this.setState({ avatar });

  get nextDisabled() {
    const { email, password } = this.state;

    return (
      email.isError ||
      password.isError ||
      email.value.length === 0 ||
      password.value.length === 0
    );
  }

  render() {
    const { email, password, nickname, firstSage, avatar } = this.state;

    const readyDisabled = nickname.isError || nickname.value.length === 0;

    return firstSage ? (
      <div className={cn('sign-up-form')}>
        <Form
          className={cn('sign-up-form__form')}
          onChangeValue={this.handleChangeValue}
          onBlur={this.handleBlur}
          inputs={[email, password]}
          key="stage1"
        />
        <SimpleButton onClick={this.toSecondStage} disabled={this.nextDisabled}>
          Продолжить
        </SimpleButton>
        <ContinueWithVK />
      </div>
    ) : (
      <div className={cn('sign-up-form')}>
        <UploadAvatar
          className={cn('sign-up-form__upload')}
          onChange={this.handleSelectPhoto}
          avatar={avatar}
        />
        <Form
          className={cn('sign-up-form__form')}
          onChangeValue={this.handleChangeValue}
          onBlur={this.handleBlur}
          inputs={[nickname]}
          key="stage2"
        />
        <div>
          <SimpleButton disabled={readyDisabled} onClick={this.handleSubmit}>
            Сохранить
          </SimpleButton>
        </div>
      </div>
    );
  }
}
