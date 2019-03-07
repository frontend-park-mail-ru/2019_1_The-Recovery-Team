import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import AuthButton from 'components/buttons/AuthButton/AuthButton';
import Form from 'components/Form/Form';
import VkButton from 'components/buttons/VkButton/VkButton';
import SubmitButton from 'components/buttons/SubmitButton/SubmitButton';
import {modes} from 'components/buttons/SubmitButton';
const styles = require('./SignInPage.modules.scss');

const cn = classNames(styles);

export default class SignInPage extends React.Component {
  state = {
    authButtons: [
      {title: 'Вход', isActive: true},
      {title: 'Регистрация', isActive: false},
    ],
    inputs: [
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
    ]
  };

  render() {
    const {authButtons, inputs} = this.state;

    return (
        <div className={cn('sign-in-page')}>
          <div className={cn('sign-in-page__container-buttons')}>
            {
              authButtons.map(({title, isActive}) => (
                  <AuthButton className={cn('sign-in-page__button')}
                              isActive={isActive}
                  >{title}</AuthButton>
              ))
            }
          </div>
          <Form inputs={inputs}/>
          <div className={cn('sign-in-page__container-submits')}>
            <VkButton />
            <SubmitButton mode={modes.NEXT}/>
          </div>
        </div>
    );
  }
}