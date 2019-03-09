import * as React from 'libs/Cheburact/index';
import classNames from 'libs/classNames/index';
import {SignUpStage} from './config/stages';
import Form, {FormConfig} from 'components/Form/index';
import VkButton from 'components/buttons/VkButton/index';
import SubmitButton, {modes} from 'components/buttons/SubmitButton/index';

const styles = require('./SignUpForm.modules.scss');

const cn = classNames(styles);

interface State {
  stage: SignUpStage;
  first: FormConfig;
  second: FormConfig;
}

export default class SignUpForm extends React.Component {
  state: State = {
    stage: SignUpStage.FIRST,
    first: {
      inputs: [
        {
          placeholder: 'Введите email',
          isError: false,
          value: '',
        },
        {
          placeholder: 'Придумайте пароль',
          isError: false,
          value: '',
        }
      ]
    },
    second: {
      inputs: [
        {
          placeholder: 'Придумайте никнейм',
          isError: false,
          value: '',
        }
      ]
    },
  };

  toSecondStage = () => this.setState({ stage: SignUpStage.SECOND });

  render() {
    const { first, second, stage } = this.state;

    return (
        <div className={'sign-up-form'}>
          <Form inputs={stage === SignUpStage.FIRST ? first.inputs : second.inputs}/>
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
