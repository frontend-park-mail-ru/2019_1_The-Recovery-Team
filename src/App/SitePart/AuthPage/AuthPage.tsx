import MainBlock from 'components/MainBlock';
import SimpleButton from 'components/SimpleButton/SimpleButton';
import { routeCreators, routesMap } from 'config/routes';
import * as React from 'libs/Cheburact';
import routerStore, {
  actionRouterPush,
  match,
  Route,
  routerActions,
} from 'libs/Cheburouter';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore from 'store/userStore';
import { AuthPageMode } from './config/modes';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const styles = require('./AuthPage.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class AuthPage extends React.Component {
  constructor(props) {
    super(props);

    if (userStore.select().user) {
      routerStore.emit(
        actionRouterPush({
          path: routeCreators.TO_START(),
        })
      );
    }
  }

  state = {
    currentTab: AuthPageMode.SIGN_IN,
    authButtons: [
      { title: 'Вход', to: routeCreators.TO_SIGN_IN() },
      { title: 'Регистрация', to: routeCreators.TO_SIGN_UP() },
    ],
  };

  @onCheburevent(routerStore, routerActions.PUSH_OK)
  selfUpdate() {
    this.setState({});
  }

  get isSignInPage(): boolean {
    return match(window.location.pathname, routesMap.SIGN_IN.template, false);
  }

  get modeTitle(): string {
    return this.isSignInPage ? 'Вход' : 'Регистрация';
  }

  render() {
    return (
      <MainBlock className={cn('sign-auth-page')}>
        <div className={cn('sign-auth-page__content')}>
          <p className={cn('sign-auth-page__title')}>{this.modeTitle}</p>
          <Route template={routesMap.SIGN_IN.template} component={SignInForm} />
          <Route template={routesMap.SIGN_UP.template} component={SignUpForm} />

          {this.isSignInPage ? (
            <SimpleButton
              className={cn('sign-auth-page__link')}
              key="to-sign-up"
              air={true}
              to={routeCreators.TO_SIGN_UP()}
            >
              Еще не зарегистрировались? Регистрация
            </SimpleButton>
          ) : (
            <SimpleButton
              className={cn('sign-auth-page__link')}
              key="to-sign-in"
              air={true}
              to={routeCreators.TO_SIGN_IN()}
            >
              Уже есть аккаунт? Войти
            </SimpleButton>
          )}
        </div>
      </MainBlock>
    );
  }
}
