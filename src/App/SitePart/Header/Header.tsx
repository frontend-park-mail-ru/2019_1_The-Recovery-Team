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
  Profile,
  userActions,
  UserUpdateSuccessPL,
} from 'store/userStore';
import Avatar from './Avatar';
import Tab from './Tab';

const styles = require('./Header.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Header extends React.Component {
  state = {
    path: window.location.pathname,
    isMusicOn: musicStore.select().isOn,
    user: null,
  };

  componentDidMount() {
    this.setState({
      user: userStore.select().user,
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
    const { path } = this.state;
    if (path !== window.location.pathname) {
      this.setState({
        path: window.location.pathname,
      });
    }
  }

  handleEntrance = e => {
    if (!this.isEntryActive) {
      e.preventDefault();
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
      routerStore.emit(
        actionRouterPush({
          path: routesMap.PROFILE.template,
        })
      );
    }
  };

  toggleMusic = () => {
    if (this.state.isMusicOn) {
      musicStore.emit(actionMusicOff());
    } else {
      musicStore.emit(actionMusicOn());
    }
  };

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
    const { user }: { user: Profile } = this.state as any;
    const { path, isMusicOn } = this.state;
    const { onOpenSideBar } = this.props;
    const isRulesActive = match(routeCreators.TO_RULES(), path, false);
    const isLeadersActive = match(routeCreators.TO_LEADER_BOARD(), path, false);
    const isAboutActive = match(routeCreators.TO_ABOUT(), path, false);
    const isStartActive = match(routeCreators.TO_START(), path, false);
    const volumeButtonType = isMusicOn
      ? circleButtonTypes.volumeOn
      : circleButtonTypes.volumeOff;

    return (
      <div className={cn('header')}>
        <div className={cn('header__content')}>
          <button className={cn('header__nav-bar')} onClick={onOpenSideBar} />
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
            <button className={cn('header__profile')}>
              <div
                onClick={this.handleProfile}
                isActive={this.isProfileActive}
                className={cn(
                  'header__nickname',
                  this.isProfileActive && 'header__nickname_active'
                )}
              >
                {user.profile.nickname}
              </div>
              <Avatar
                to={routeCreators.TO_PROFILE()}
                avatar={user.profile.avatar}
              />
            </button>
          ) : (
            <div className={cn('header__entry')}>
              <a
                onClick={this.handleEntrance}
                className={cn(
                  'header__entry-text',
                  this.isEntryActive && 'header__entry-text_active'
                )}
              >
                Вход
              </a>
              <CircleButton
                onClick={this.handleEntrance}
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
}
