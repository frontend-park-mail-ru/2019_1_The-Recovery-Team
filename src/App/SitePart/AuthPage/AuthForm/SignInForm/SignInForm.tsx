import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Form from 'components/Form/Form';
import VkButton from 'components/buttons/VkButton/VkButton';
import SubmitButton from 'components/buttons/SubmitButton/SubmitButton';
import {modes} from 'components/buttons/SubmitButton';
const styles = require('./SignInForm.modules.scss');

const cn = classNames(styles);

export default class SignInForm extends React.Component {
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
    return (
        <div className={cn('sign-in-form')}>
          <Form inputs={inputsSignIn}/>
          <div className={cn('sign-in-form__container-submits')}>
            <VkButton />
            <SubmitButton mode={modes.NEXT} />
          </div>
        </div>
    );
  }
}
