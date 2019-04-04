import InOutButton from 'components/buttons/InOutButton';
import VolumeButton from 'components/buttons/VolumeButton';
import LabelAuthUser from 'components/LabelAuthUser';
import { LogotypeSizes } from 'components/Logotype';
import Logotype from 'components/Logotype/Logotype';
import { routesMap } from 'config/routes';
import * as React from 'libs/Cheburact';
import routerStore, { actionRouterPush } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
import { CurPage } from '../..';
import Tabbar from './Tabbar/Tabbar';
const styles = require('./Header.modules.scss');

const cn = classNames(styles);

export default class Header extends React.Component {
  handleIOClick = e => {
    e.preventDefault();
    const { user, onLogout } = this.props;
    if (user) {
      onLogout();
      routerStore.emit(
        actionRouterPush({
          path: routesMap.BASE.template,
        })
      );
    } else {
      routerStore.emit(
        actionRouterPush({
          path: routesMap.SIGN_IN.template,
        })
      );
    }
  };

  render() {
    const { user, mode, onChangeMode } = this.props;

    const labelUserHidden =
      mode === CurPage.SIGNIN ||
      mode === CurPage.SIGNUP ||
      mode === CurPage.PROFILE ||
      mode === CurPage.EDIT_PROFILE ||
      !user;

    const ioButtonHidden =
      (user && mode !== CurPage.PROFILE && mode !== CurPage.EDIT_PROFILE) ||
      mode === CurPage.SIGNIN ||
      mode === CurPage.SIGNUP;

    return (
      <div className={cn('header', 'header_main')}>
        {mode !== CurPage.START && (
          <div className={cn('header__container-logotype')}>
            <Logotype size={LogotypeSizes.MIDDLE} />
          </div>
        )}
        <div className={cn('header__tabbar')}>
          <Tabbar mode={mode} onChangeMode={onChangeMode} />
        </div>
        <div
          className={cn(
            'header__container-buttons',
            mode === CurPage.START && 'header__container-buttons_start-page'
          )}
        >
          <VolumeButton on={true} />
          {!labelUserHidden && (
            <LabelAuthUser
              className={cn('header__container-user-wrapper')}
              user={user}
              onChangeMode={onChangeMode}
            />
          )}
          {!ioButtonHidden && (
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
