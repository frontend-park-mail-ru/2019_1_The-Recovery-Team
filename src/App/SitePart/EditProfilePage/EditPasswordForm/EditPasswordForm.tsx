import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import {InputConfig} from 'components/Form';
import Form from 'components/Form';
import SubmitButton from 'components/buttons/SubmitButton';
import {modes} from 'components/buttons/SubmitButton';
import Requester from 'libs/Requester/Requester';
import API from 'config/API';
import {CurPage} from '../../..';
import validatePasswords from './utils/validatePasswords';
const styles = require('./EditPasswordForm.modules.scss');

const cn = classNames(styles);

interface State {
  oldPassword: InputConfig,
  newPassword: InputConfig,
  repeatNewPassword: InputConfig,
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
    }
  };

  handleChangeValue = (name: string, value: string) => {
    const {newPassword, repeatNewPassword} = this.state;
    if (name === newPassword.name || name === repeatNewPassword.name) {
      let nextNewP: null | InputConfig = null;
      let nextNewRepeatP: null | InputConfig = null;
      if (name === newPassword.name) {
        [nextNewP, nextNewRepeatP] = validatePasswords({ ...newPassword, value, touched: true }, repeatNewPassword);
      }
      else {
        [nextNewP, nextNewRepeatP] = validatePasswords(newPassword, { ...repeatNewPassword, value, touched: true });
      }
      console.log(nextNewP, nextNewRepeatP);
      this.setState({
        [newPassword.name]: nextNewP,
        [repeatNewPassword.name]: nextNewRepeatP,
      });
      return;
    }

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
          placeholder: 'Обязательное поле',
          isError: true,
        }
      });
    }
  };

  updatePassword = () => {
    const { oldPassword, newPassword } = this.state;

  Requester.put(API.profileItem(this.props.user.id), {
      password_old: oldPassword.value,
      password: newPassword.value,
    })
      .then(({response, error}) => {
        const { user, onAuthorized, onChangeMode } = this.props;

        if (response) {
          onAuthorized({...user});
          onChangeMode(CurPage.PROFILE);
        }
        else {
          this.setState({
            [oldPassword.name]: {
              ...oldPassword,
              isError: true,
              placeholder: 'Возможно, неверный пароль',
            }
          });
        }
      });
  };

  render() {
    const { oldPassword, newPassword, repeatNewPassword } = this.state;
    const saveDisabled =
        oldPassword.isError
        || newPassword.isError
        || repeatNewPassword.isError
        || oldPassword.value.length === 0
        || newPassword.value.length === 0
        || repeatNewPassword.value.length === 0
        || newPassword.value !== repeatNewPassword.value;
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
                mode={modes.SAVE}/>
          </div>
        </div>
    );
  }
}
