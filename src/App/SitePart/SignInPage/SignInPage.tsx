import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Form from 'components/Form';
import VkButton from 'components/buttons/VkButton';
import {modes} from 'components/buttons/SubmitButton';
import AuthButton from 'components/buttons/AuthButton';
import SubmitButton from 'components/buttons/SubmitButton';
import {AuthPageMode} from "./config/modes";
const styles = require('./SignInPage.modules.scss');

const cn = classNames(styles);

export default class SignInPage extends React.Component {
  state = {
    currentTab: AuthPageMode.SIGN_IN,
    authButtons: [
      {title: 'Вход', mode: AuthPageMode.SIGN_IN},
      {title: 'Регистрация', mode: AuthPageMode.SIGN_UP_1},
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

  toMode = (mode: AuthPageMode) => this.setState({ currentTab: mode });
  toSignUp2 = () => this.setState({ currentTab: AuthPageMode.SIGN_UP_2 });

  render() {
    const {authButtons, inputs, currentTab} = this.state;

    return (
        <div className={cn('sign-in-page')}>
          <div className={cn('sign-in-page__container-buttons')}>
            {
              authButtons.map(({title, mode}) => (
                  <AuthButton className={cn('sign-in-page__button')}
                              isActive={mode === currentTab}
                              onClick={() => this.toMode(mode)}
                  >
                    {title}
                  </AuthButton>
              ))
            }
          </div>
          <Form inputs={inputs} />
          <div className={cn('sign-in-page__container-submits')}>
            <VkButton />
            <SubmitButton mode={modes.NEXT} />
          </div>
        </div>
    );
  }
}
