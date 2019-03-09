import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import AuthButton from 'components/buttons/AuthButton';
import {AuthPageMode} from './config/modes';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
const styles = require('./AuthPage.modules.scss');

const cn = classNames(styles);

export default class AuthPage extends React.Component {
  state = {
    currentTab: AuthPageMode.SIGN_UP,
    authButtons: [
      {title: 'Вход', mode: AuthPageMode.SIGN_IN},
      {title: 'Регистрация', mode: AuthPageMode.SIGN_UP},
    ],
  };

  toMode = (mode: AuthPageMode) => this.setState({ currentTab: mode });

  render() {
    const {
      authButtons,
      currentTab
    } = this.state;

    return (
        <div className={cn('sign-auth-page')}>
          <div className={cn('sign-auth-page__container-buttons')}>
            {
              authButtons.map(({title, mode}) => (
                  <AuthButton className={cn('sign-auth-page__button')}
                              isActive={mode === currentTab}
                              onClick={() => this.toMode(mode)}
                  >
                    {title}
                  </AuthButton>
              ))
            }
          </div>
          {currentTab === AuthPageMode.SIGN_IN && (<SignInForm/>)}
          {currentTab === AuthPageMode.SIGN_UP && (<SignUpForm/>)}
        </div>
    );
  }
}
