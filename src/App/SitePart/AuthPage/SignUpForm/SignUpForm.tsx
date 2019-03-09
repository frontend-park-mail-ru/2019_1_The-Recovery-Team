import * as React from 'libs/Cheburact/index';
import classNames from 'libs/classNames/index';
import {SignUpStage} from './config/stages';
import Form, { InputConfig } from 'components/Form/index';
import VkButton from 'components/buttons/VkButton/index';
import SubmitButton, {modes} from 'components/buttons/SubmitButton/index';
import Requester from 'libs/Requester/Requester';
import API from 'config/API';

const styles = require('./SignUpForm.modules.scss');

const cn = classNames(styles);

interface State {
  stage: SignUpStage;
  email: InputConfig;
  password: InputConfig;
  nickname: InputConfig;
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
    },
    password: {
      placeholder: 'Пароль',
      isError: false,
      value: '',
      name: 'password',
      touched: false,
      label: 'Пароль',
    },
    nickname: {
      placeholder: 'Никнейм',
      isError: false,
      value: '',
      name: 'nickname',
      touched: false,
      label: 'Никнейм',
    }
  };

  componentDidUpdate() {
    console.log('new state', this.state);
  }

  toSecondStage = () => this.setState({ stage: SignUpStage.SECOND });

  handleSubmit = () => {
    const { email, nickname, password } = this.state;
    Requester.post(API.profiles(), {
      email: email.value,
      nickname: nickname.value,
      password: password.value,
    }, true).then(({ response, error }) => {
      this.props.onAuthorized(response);
      console.log({ response, error });
    });
  };

  handleChangeValue = (name: string, value: string) => {
    const field: InputConfig = this.state[name];
    this.setState({
      [name]: {
        ...field,
        placeholder: value.length ? field.label : field.placeholder,
        isError: value.length ? false : field.isError,
        value,
        touched: true,
      }
    });
  };

  handleBlur = (name: string) => {
    const field: InputConfig = this.state[name];
    if (field.value.length === 0 && field.touched ) {
      this.setState({
        [name]: {
          ...field,
          placeholder: `${field.label} - обязательное поле`,
          isError: true,
        }
      });
    }
  };

  render() {
    const {
      stage,
      email,
      password,
      nickname,
    } = this.state;

    const nextDisabled = email.isError
        || password.isError
        || email.value.length === 0
        || password.value.length === 0;

    const readyDisabled = nickname.isError
        || nickname.value.length === 0;

    return (
        <div className={'sign-up-form'}>
          {/* TODO: Див убрать, когда Чебурякт доделОем */}
          <div>
            <Form
                onChangeValue={this.handleChangeValue}
                onBlur={this.handleBlur}
                inputs={stage === SignUpStage.FIRST ? [email, password] : [nickname]}
                key={stage === SignUpStage.FIRST ? 'form1' : 'form2'}
            />
          </div>
          {
            stage === SignUpStage.FIRST
                ? (
                    <div className={cn('sign-up-form__up1-container-submits')}>
                      <VkButton />
                      <SubmitButton mode={modes.NEXT} onClick={this.toSecondStage} disabled={nextDisabled}/>
                    </div>
                  )
                : (
                    <div className={cn('sign-up-form__up2-container-submits')}>
                      <div className={cn('sign-up-form__button-container')}>
                        <SubmitButton mode={modes.UPLOAD_PHOTO}/>
                      </div>
                      <div className={cn('sign-up-form__container-ready-button')}>
                        <SubmitButton mode={modes.READY} disabled={readyDisabled} onClick={this.handleSubmit}/>
                      </div>
                    </div>
                )
          }
        </div>
    );
  }
}
