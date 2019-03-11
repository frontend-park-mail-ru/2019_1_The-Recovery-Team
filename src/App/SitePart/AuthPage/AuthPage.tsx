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
    currentTab: AuthPageMode.SIGN_IN,
    authButtons: [
      {title: 'Вход', mode: AuthPageMode.SIGN_IN},
      {title: 'Регистрация', mode: AuthPageMode.SIGN_UP},
    ],
  };

  componentDidMount() {
    console.log(this.props, this.state);
  }

  componentDidUpdate() {
    console.log(this.props, this.state);
  }

  toMode = (mode: AuthPageMode) => this.setState({ currentTab: mode });

  render() {
    const {
      authButtons,
      currentTab,
    } = this.state;

    const { onAuthorized } = this.props;

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
          {currentTab === AuthPageMode.SIGN_IN && (<SignInForm onAuthorized={onAuthorized}/>)}
          {currentTab === AuthPageMode.SIGN_UP && (<SignUpForm onAuthorized={onAuthorized}/>)}
        </div>
    );
  }
}
