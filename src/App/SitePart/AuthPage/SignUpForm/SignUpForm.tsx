import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Requester from 'libs/Requester';
import Form, { InputConfig } from 'components/Form';
import VkButton from 'components/buttons/VkButton';
import SubmitButton, {modes} from 'components/buttons/SubmitButton';
import API from 'config/API';
import {SignUpStage} from './config/stages';
import debounce from 'libs/debounce';

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
      type: 'email'
    },
    password: {
      placeholder: 'Пароль',
      isError: false,
      value: '',
      name: 'password',
      touched: false,
      label: 'Пароль',
      type: 'password',
    },
    nickname: {
      placeholder: 'Никнейм',
      isError: false,
      value: '',
      name: 'nickname',
      touched: false,
      label: 'Никнейм',
      type: 'text',
    },
    avatar: null,
  };

  toSecondStage = () => this.setState({ stage: SignUpStage.SECOND });

  handleSubmit = () => {
    const { email, nickname, password, avatar } = this.state;
    console.log(avatar);
    Requester.post(API.profiles(), {
      email: email.value,
      nickname: nickname.value,
      password: password.value,
      avatar,
    }, true).then(({ response, error }) => {
      this.props.onAuthorized(response);
    });
  };

  changeValueField(name: string, value, field: InputConfig) {
    this.setState({
      [name]: {
        ...field,
        placeholder: value.length ? field.label : field.placeholder,
        isError: value.length ? false : field.isError,
        value,
        touched: true,
      }
    });
  }

  handleChangeValue = (name: string, value: string) => {
    const field: InputConfig = this.state[name];

    if (name === 'email' || name === 'nickname') {
      Requester.get(API.profiles(), {
        [name]: value
      }).then(({response, error}) => {
        if (!error) {
          this.setState({
            [name]: {
              ...field,
              placeholder: `Такой ${field.label} уже существует`,
              isError: true,
              value,
              touched: true
            }
          });
        } else {
          this.changeValueField(name, value, field);
        }
      });
    } else {
      this.changeValueField(name, value, field);
    }
  };

  debounceHandler = debounce(this.handleChangeValue, 1000);

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

  handleSelectPhoto = (e) =>
    this.setState({
      avatar: e.target.files[0] || null,
    });

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
                onChangeValue={this.debounceHandler}
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
                      <input type='file' accept='image/*' onChange={this.handleSelectPhoto} />
                      {/*<div className={cn('sign-up-form__button-container')}>*/}
                        {/*<SubmitButton mode={modes.UPLOAD_PHOTO}/>*/}
                      {/*</div>*/}
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
