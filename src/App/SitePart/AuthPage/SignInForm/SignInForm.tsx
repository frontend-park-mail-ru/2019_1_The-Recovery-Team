import * as React from 'libs/Cheburact/index';
import classNames from 'libs/classNames/index';
import Form from 'components/Form/Form';
import VkButton from 'components/buttons/VkButton/VkButton';
import SubmitButton from 'components/buttons/SubmitButton/SubmitButton';
import {modes} from 'components/buttons/SubmitButton/index';
import {FormConfig} from 'components/Form';
const styles = require('./SignInForm.modules.scss');

const cn = classNames(styles);

export default class SignInForm extends React.Component {
  state: { config: FormConfig } = {
    config: {
      inputs: [
        {
          placeholder: 'Введите email',
          value: '',
          isError: true,
        },
        {
          placeholder: 'Введите пароль',
          value: '',
          isError: false,
        }
      ]
    },
  };

  render() {
    const { config } = this.state;
    return (
        <div className={cn('sign-in-form')}>
          <Form inputs={config.inputs}/>
          <div className={cn('sign-in-form__container-submits')}>
            <VkButton />
            <SubmitButton mode={modes.NEXT} />
          </div>
        </div>
    );
  }
}
