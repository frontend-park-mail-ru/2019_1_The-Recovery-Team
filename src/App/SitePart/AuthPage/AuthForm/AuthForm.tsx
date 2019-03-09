import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Form from 'components/Form/Form';
import {modes} from 'components/buttons/SubmitButton';
import VkButton from 'components/buttons/VkButton/VkButton';
import SubmitButton from 'components/buttons/SubmitButton/SubmitButton';
import {AuthPageMode} from '../config/modes';
import SignUpForm from './SignUpForm/SignUpForm';
const styles = require('./AuthForm.modules.scss');

const cn = classNames(styles);

export default class AuthForm extends React.Component {
  state = {
    inputsSignIn: [
      {
        placeholder: 'Введите email',
        textError: 'Неправильный email',
        isActive: true,
        isError: true,
      },
      {
        placeholder: 'Введите пароль',
        textError: 'Неправильный пароль',
        isActive: false,
        isError: false,
      }
    ],
  };

  render() {
    const { inputsSignIn } = this.state;
    const { currentTab } = this.props;

    return (
        <div className={cn('auth-form')}>
          {currentTab === AuthPageMode.SIGN_IN && (<Form inputs={inputsSignIn}/>)}
          {currentTab === AuthPageMode.SIGN_IN
          && (
              <div className={cn('auth-form__in-container-submits')}>
                <VkButton />
                <SubmitButton mode={modes.NEXT} />
              </div>
             )
          }
          {currentTab === AuthPageMode.SIGN_UP && (<SignUpForm/>)}
        </div>
    );
  }
}
