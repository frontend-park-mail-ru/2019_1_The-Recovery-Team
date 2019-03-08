import * as React from 'libs/Cheburact';
import className from 'libs/classNames';
import AuthButton from 'components/buttons/AuthButton';
import Form from 'components/Form';
// import VkButton from 'components/buttons/VkButton';
import SubmitButton from 'components/buttons/SubmitButton';
import {modes} from 'components/buttons/SubmitButton';
const styles = require('./SignUpPage.modules.scss');

const cn = className(styles);

export default class SignUpPage extends React.Component {
  state = {
    authButtons: [
      {title: 'Вход', isActive: false},
      {title: 'Регистрация', isActive: true},
    ],
    inputs1: [
      {
        placeholder: 'Введите email',
        textError: 'Неправильный email',
        isActive: true,
        isError: false,
      },
      {
        placeholder: 'Придумайте пароль',
        textError: 'Короткий пароль',
        isActive: false,
        isError: false,
      }
    ],
    inputs2: [
      {
        placeholder: 'Придумайте никнейм',
        textError: 'Пользователь с таким никнеймом уже существует',
        isActive: true,
        isError: false,
      }
    ]
  };

  render() {
    const {authButtons, inputs1, inputs2} = this.state;

    return (
        <div className={cn('sign-up-page')}>
          <div className={cn('sign-up-page__container-buttons')}>
            {
              authButtons.map(({title, isActive}) => (
                  <AuthButton className={cn('sign-up-page__button')}
                              isActive={isActive}
                  >{title}</AuthButton>
              ))
            }
          </div>
          {/*Первая страница регистрации*/}
          {/*<Form inputs={inputs1} />
          <div className={cn('sign-up-page__container-submits')}>
            <VkButton />
            <SubmitButton mode={modes.NEXT}/>
          </div>*/}
          {/*Вторая страница регистрации*/}
          <Form inputs={inputs2}/>
          <div className={cn('sign-up-page__button-container')}>
            <SubmitButton mode={modes.UPLOADPHOTO}/>
          </div>
          <div className={cn('sign-up-page__container-ready-button')}>
            <SubmitButton mode={modes.READY}/>
          </div>
        </div>
    );
  }
}
