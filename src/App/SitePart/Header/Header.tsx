import InOutButton from 'components/buttons/InOutButton';
import VolumeButton from 'components/buttons/VolumeButton';
import LabelAuthUser from 'components/LabelAuthUser';
import { LogotypeSizes } from 'components/Logotype';
import Logotype from 'components/Logotype/Logotype';
import { routeCreators, routesMap } from 'config/routes';
import * as React from 'libs/Cheburact';
import routerStore, {
  actionRouterPush,
  match,
  routerActions,
} from 'libs/Cheburouter';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import Tabbar from './Tabbar/Tabbar';
const styles = require('./Header.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Header extends React.Component {
  static isStartPage = () =>
    match(window.location.pathname, routesMap.BASE.template, true);

  state = {
    isStartPage: Header.isStartPage(),
    path: window.location.pathname,
  };

  @onCheburevent(routerStore, routerActions.PUSH_OK)
  handlePageChange() {
    const isStartPage = Header.isStartPage();
    const { path, isStartPage: curIsStartPage } = this.state;
    if (curIsStartPage !== isStartPage || path !== window.location.pathname) {
      this.setState({
        isStartPage,
        path: window.location.pathname,
      });
    }
  }

  handleIOClick = e => {
    e.preventDefault();
    const { user, onLogout } = this.props;
    if (user) {
      onLogout();
    } else {
      routerStore.emit(
        actionRouterPush({
          path: routesMap.SIGN_IN.template,
        })
      );
    }
  };

  get isLabelUserVisible() {
    return !this.isIOButtonVisible;
  }

  get isIOButtonVisible() {
    const { path } = this.state;
    const { user } = this.props;
    return !user || !!match(routesMap.PROFILE.template, path);
  }

  render() {
    const { user } = this.props;
    const { isStartPage } = this.state;

    return (
      <div className={cn('header', 'header_main')}>
        {!isStartPage && (
          <div className={cn('header__container-logotype')}>
            <Logotype size={LogotypeSizes.MIDDLE} />
          </div>
        )}
        <div className={cn('header__tabbar')}>
          <Tabbar />
        </div>
        <div
          className={cn(
            'header__container-buttons',
            isStartPage && 'header__container-buttons_start-page'
          )}
        >
          <VolumeButton on={true} />
          {this.isLabelUserVisible && (
            <LabelAuthUser
              className={cn('header__container-user-wrapper')}
              user={user}
              to={routeCreators.TO_PROFILE()}
            />
          )}
          {this.isIOButtonVisible && (
            <InOutButton
              isAuthenticated={!!user}
              onClick={this.handleIOClick}
            />
          )}
        </div>
      </div>
    );
  }
}
