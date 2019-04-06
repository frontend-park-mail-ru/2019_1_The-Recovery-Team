import AuthButton from 'components/buttons/AuthButton';
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
import MainBlock from '../MainBlock';
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

  toMode = (mode: AuthPageMode) => this.setState({ currentTab: mode });

  render() {
    const { authButtons } = this.state;
    const { pathname } = window.location;

    return (
      <MainBlock>
        <div className={cn('sign-auth-page')}>
          <div className={cn('sign-auth-page__container-buttons')}>
            {authButtons.map(({ title, to }) => (
              <AuthButton
                className={cn('sign-auth-page__button')}
                isActive={match(pathname, to, false)}
                to={to}
              >
                {title}
              </AuthButton>
            ))}
          </div>
          <Route template={routesMap.SIGN_IN.template} component={SignInForm} />
          <Route template={routesMap.SIGN_UP.template} component={SignUpForm} />
        </div>
      </MainBlock>
    );
  }
}
