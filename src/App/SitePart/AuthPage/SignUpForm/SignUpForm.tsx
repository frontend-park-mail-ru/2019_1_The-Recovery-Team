import SubmitButton, { modes } from 'components/buttons/SubmitButton';
import VkButton from 'components/buttons/VkButton';
import Form from 'components/Form';
import API from 'config/API';
import * as React from 'libs/Cheburact';
import { Action } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import debounce from 'libs/debounce';
import userStore, {
  actionUserSignup,
  userActionTypes,
  UserLoginErrorPL,
} from 'store/userStore';
import { InputConfig } from 'utils/form/types';
import {
  touchField,
  validateAlreadyExists,
  validateRequired,
} from 'utils/form/validators';
import { SignUpStage } from './config/stages';

const styles = require('./SignUpForm.modules.scss');

const cn = classNames(styles);

interface State {
  stage: SignUpStage;
  email: InputConfig;
  password: InputConfig;
  nickname: InputConfig;
  avatar: ImageData | null;
}

export default class SignUpForm extends React.Component {
  state: State = {
    stage: SignUpStage.FIRST,
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

  constructor(props) {
    super(props);
    userStore.on(userActionTypes.USER_SIGNUP_ERROR, this.handleSignupError);
  }

  toSecondStage = () =>
    !this.nextDisabled ? this.setState({ stage: SignUpStage.SECOND }) : null;

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

  handleSignupError = (action: Action<UserLoginErrorPL>) => {
    // TODO:
  };

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

  handleSelectPhoto = e =>
    this.setState({
      avatar: e.target.files[0] || null,
    });

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
    const { stage, email, password, nickname } = this.state;

    const readyDisabled = nickname.isError || nickname.value.length === 0;

    return (
      <div className={'sign-up-form'}>
        {/* TODO: Див убрать, когда Чебурякт доделОем */}
        <div>
          <Form
            onChangeValue={this.handleChangeValue}
            onBlur={this.handleBlur}
            inputs={
              stage === SignUpStage.FIRST ? [email, password] : [nickname]
            }
            key={stage === SignUpStage.FIRST ? 'form1' : 'form2'}
          />
        </div>
        {stage === SignUpStage.FIRST ? (
          <div className={cn('sign-up-form__up1-container-submits')}>
            <VkButton />
            <SubmitButton
              mode={modes.NEXT}
              onClick={this.toSecondStage}
              disabled={this.nextDisabled}
            >
              {'Продолжить регистрацию'}
            </SubmitButton>
          </div>
        ) : (
          <div className={cn('sign-up-form__up2-container-submits')}>
            <input
              type="file"
              accept="image/*"
              onChange={this.handleSelectPhoto}
            />
            <div className={cn('sign-up-form__container-ready-button')}>
              <SubmitButton
                mode={modes.NEXT}
                disabled={readyDisabled}
                onClick={this.handleSubmit}
              >
                {'Зарегистрироваться'}
              </SubmitButton>
            </div>
          </div>
        )}
      </div>
    );
  }
}
