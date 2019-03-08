import * as React from 'libs/Cheburact';
import className from 'libs/classNames';
import SubmitButton, {modes} from 'components/buttons/SubmitButton';
import AuthButton from 'components/buttons/AuthButton';
import VkButton from 'components/buttons/VkButton';
import Form from 'components/Form';
import {SignUpStages} from './config/signUpStages';

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
    ],
    stage: SignUpStages.SECOND,
  };

  render() {
    const {authButtons, inputs1, inputs2, stage} = this.state;

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

          <Form inputs={ stage === SignUpStages.FIRST ? inputs1 : inputs2} />

          { stage === SignUpStages.FIRST && <div className={cn('sign-up-page__container-submits')}>
              <VkButton />
              <SubmitButton mode={modes.NEXT}/>
          </div> }

          { stage === SignUpStages.SECOND && <div className={cn('sign-up-page__button-container')}>
              <SubmitButton mode={modes.UPLOAD_PHOTO}/>
          </div> }

          { stage === SignUpStages.SECOND && <div className={cn('sign-up-page__container-ready-button')}>
              <SubmitButton mode={modes.READY}/>
          </div> }
        </div>
    );
  }
}
