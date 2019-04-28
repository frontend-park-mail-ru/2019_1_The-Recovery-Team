import CircleButton from 'components/buttons/CircleButton';
import { circleButtonTypes } from 'components/buttons/CircleButton/modes';
import Logotype from 'components/LogotypeNew';
import { routeCreators, routesMap } from 'config/routes';
import * as React from 'libs/Cheburact';
import routerStore, {
  actionRouterPush,
  match,
  routerActions,
} from 'libs/Cheburouter';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import musicStore, {
  actionMusicOff,
  actionMusicOn,
  musicActions,
  MusicChangedPL,
} from 'store/musicStore';
import userStore, {
  userActions,
  UserUpdateSuccessPL,
} from '../../../store/userStore';
import Tab from './Tab';

const styles = require('./Header.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Header extends React.Component {
  static isStartPage = () =>
    match(window.location.pathname, routesMap.BASE.template, true);

  state = {
    path: window.location.pathname,
    isMusicOn: musicStore.select().isOn,
    user: null,
  };

  componentDidMount() {
    this.setState({
      user: userStore.select().user || null,
    });
  }

  @onCheburevent(userStore, userActions.UPDATE_SUCCESS)
  updateUser(action: Action<UserUpdateSuccessPL>) {
    this.setState({
      user: action.payload,
    });
  }

  @onCheburevent(musicStore, musicActions.CHANGED)
  handleChangeSound({ payload }: Action<MusicChangedPL>) {
    this.setState({
      isMusicOn: payload.isOn,
    });
  }

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

  handleEntrance = e => {
    if (!this.isEntryActive) {
      e.preventDefault();
      console.log('ВХОД');
      routerStore.emit(
        actionRouterPush({
          path: routesMap.SIGN_IN.template,
        })
      );
    }
  };

  handleProfile = e => {
    if (!this.isEntryActive) {
      e.preventDefault();
      console.log('ПРОФИЛЬ', this.state.user);
      routerStore.emit(
        actionRouterPush({
          path: routesMap.PROFILE.template,
        })
      );
    }
  };

  /*  handleIOClick = e => {
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
  };*/

  toggleMusic = () => {
    if (this.state.isMusicOn) {
      musicStore.emit(actionMusicOff());
    } else {
      musicStore.emit(actionMusicOn());
    }
  };

  /*
  get isLabelUserVisible() {
    return !this.isIOButtonVisible;
  }

  get isIOButtonVisible() {
    const { path } = this.state;
    const { user } = this.props;
    return !user || !!match(routesMap.PROFILE.template, path);
  }
*/

  get isEntryActive() {
    const { path } = this.state;
    return (
      !!match(routesMap.SIGN_IN.template, path) ||
      !!match(routesMap.SIGN_UP.template, path)
    );
  }

  get isProfileActive() {
    const { path } = this.state;
    return !!match(routesMap.PROFILE.template, path);
  }

  render() {
    const { path, isMusicOn, user } = this.state;
    const isRulesActive = match(routeCreators.TO_RULES(), path, false);
    const isLeadersActive = match(routeCreators.TO_LEADER_BOARD(), path, false);
    const isAboutActive = match(routeCreators.TO_ABOUT(), path, false);
    const isStartActive = match(routeCreators.TO_START(), path, false);
    const volumeButtonType = isMusicOn
      ? circleButtonTypes.volumeOn
      : circleButtonTypes.volumeOff;
    console.log('user', user);

    return (
      <div className={cn('header')}>
        <div className={cn('header__content')}>
          <div className={cn('header__volume')}>
            <CircleButton type={volumeButtonType} onClick={this.toggleMusic} />
          </div>

          <div className={cn('header__tabbar')}>
            <div className={cn('header__left-part')}>
              <Tab
                className={cn('header__tab_left')}
                to={routeCreators.TO_RULES()}
                isActive={isRulesActive}
              >
                Правила
              </Tab>
              <Tab
                to={routeCreators.TO_LEADER_BOARD()}
                isActive={isLeadersActive}
              >
                Лидеры
              </Tab>
            </div>
            <div className={cn('header__right-part')}>
              <Tab to={routeCreators.TO_ABOUT()} isActive={isAboutActive}>
                О нас
              </Tab>
              <Tab
                className={cn('header__tab_right')}
                isActive={isStartActive}
                to={routeCreators.TO_START()}
              >
                Играть
              </Tab>
            </div>
          </div>
          {!!user ? (
            <div onClick={this.handleProfile} className={cn('header__profile')}>
              <a
                isActive={this.isProfileActive}
                className={cn(
                  'header__nickname',
                  this.isProfileActive && 'header__profile_active'
                )}
              >
                {user.profile.nickname}
              </a>
              <CircleButton
                type={circleButtonTypes.profile}
                isActive={this.isProfileActive}
              />
            </div>
          ) : (
            <div onClick={this.handleEntrance} className={cn('header__entry')}>
              <a
                className={cn(
                  'header__entry-text',
                  this.isEntryActive && 'header__entry-text_active'
                )}
              >
                Вход
              </a>
              <CircleButton
                type={circleButtonTypes.profile}
                isActive={this.isEntryActive}
              />
            </div>
          )}
          <Logotype className={cn('header__logotype')} />
        </div>
      </div>
    );
  }

  /*render() {
    const { user } = this.props;
    const { isStartPage, isMusicOn } = this.state;

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
          <VolumeButton on={isMusicOn} onClick={this.toggleMusic} />
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
  }*/
}
