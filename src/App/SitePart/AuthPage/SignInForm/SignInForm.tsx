import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Requester from 'libs/Requester/Requester';
import Form from 'components/Form';
import VkButton from 'components/buttons/VkButton';
import SubmitButton from 'components/buttons/SubmitButton';
import {modes} from 'components/buttons/SubmitButton';
import { InputConfig } from 'components/Form';
import API from 'config/API';
const styles = require('./SignInForm.modules.scss');

const cn = classNames(styles);

interface State {
  email: InputConfig;
  password: InputConfig;
}

export default class SignInForm extends React.Component {
  state: State = {
    email: {
      placeholder: 'Email',
      value: '',
      isError: false,
      name: 'email',
      touched: false,
      label: 'Email',
      type: 'email'
    },
    password: {
      placeholder: 'Пароль',
      value: '',
      isError: false,
      name: 'password',
      touched: false,
      label: 'Пароль',
      type: 'password',
    }
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

  handleSubmit = () => {
    const { email, password } = this.state;
    Requester.post(API.sessions(), {
      email: email.value,
      password: password.value,
    }).then(({ response, error }) => {
      if (error) {
        return Promise.reject();
      }
      else {
        return Requester.get(API.profileItem((response || {}).id));
      }
    })
    .then(({response, error}) => {
      if (response) {
        this.props.onAuthorized(response);
      }
      else {
        return Promise.reject();
      }
    })
    .catch((error) => {
      this.setState({
        email: {
          ...email,
          isError: true,
          placeholder: 'Неправильный email или пароль',
        },
        password: {
          ...password,
          isError: true,
          placeholder: password.label,
        }
      });
    });
  };

  render() {
    const { email, password } = this.state;

    const nextDisabled = email.isError
        || password.isError
        || email.value.length === 0
        || password.value.length === 0;

    return (
        <div className={cn('sign-in-form')}>
          <Form
              onChangeValue={this.handleChangeValue}
              onBlur={this.handleBlur}
              inputs={[email, password]}
          />
          <div className={cn('sign-in-form__container-submits')}>
            <VkButton />
            <SubmitButton
                mode={modes.NEXT}
                disabled={nextDisabled}
                onClick={this.handleSubmit}
            />
          </div>
        </div>
    );
  }
}
