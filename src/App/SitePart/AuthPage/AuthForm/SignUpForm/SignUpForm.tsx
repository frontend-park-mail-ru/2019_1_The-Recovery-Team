import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import {SignUpStage} from './config/stages';
import Form from 'components/Form';
import VkButton from 'components/buttons/VkButton';
import SubmitButton from 'components/buttons/SubmitButton';
import {modes} from 'components/buttons/SubmitButton';
import {AuthPageMode} from "../../config/modes";
const styles = require('./SignUpForm.modules.scss');

const cn = classNames(styles);

export default class SignUpForm extends React.Component {
  state = {
    stage: SignUpStage.FIRST,
    inputsSignUpFirst: [
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
    inputsSignUpSecond: [
      {
        placeholder: 'Придумайте никнейм',
        textError: 'Пользователь с таким никнеймом уже существует',
        isActive: true,
        isError: false,
      }
    ]
  };

  toSecondStage = () => this.setState({ stage: SignUpStage.SECOND });

  render() {
    const { inputsSignUpFirst, inputsSignUpSecond, stage } = this.state;

    return (
        <div className={'sign-up-form'}>
          {
            stage === SignUpStage.FIRST
                ? (<Form inputs={inputsSignUpFirst}/>)
                : (<Form inputs={inputsSignUpSecond}/>)
          }
          {
            stage === SignUpStage.FIRST
                ? (
                    <div className={cn('sign-up-form__up1-container-submits')}>
                      <VkButton />
                      <SubmitButton mode={modes.NEXT} onClick={this.toSecondStage}/>
                    </div>
                  )
                : (
                    <div className={cn('sign-up-form__up2-container-submits')}>
                      <div className={cn('sign-up-form__button-container')}>
                        <SubmitButton mode={modes.UPLOAD_PHOTO}/>
                      </div>
                      <div className={cn('sign-up-form__container-ready-button')}>
                        <SubmitButton mode={modes.READY}/>
                      </div>
                    </div>
                )
          }
        </div>
    );
  }
}
