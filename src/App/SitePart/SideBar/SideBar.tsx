import Avatar from 'components/Avatar/Avatar';
import CircleButton from 'components/buttons/CircleButton';
import {
  circleButtonStyles,
  circleButtonTypes,
} from 'components/buttons/CircleButton/modes';
import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import musicStore, {
  actionMusicOff,
  actionMusicOn,
  musicActions,
  MusicChangedPL,
} from '../../../store/musicStore';

const styles = require('./SideBar.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class SideBar extends React.Component {
  state = {
    isMusicOn: musicStore.select().isOn,
  };

  @onCheburevent(musicStore, musicActions.CHANGED)
  handleChangeSound({ payload }: Action<MusicChangedPL>) {
    this.setState({
      isMusicOn: payload.isOn,
    });
  }

  toggleMusic = e => {
    e.stopPropagation();
    if (this.state.isMusicOn) {
      musicStore.emit(actionMusicOff());
    } else {
      musicStore.emit(actionMusicOn());
    }
  };

  render() {
    const { isOpen, onClose = () => null, user } = this.props;
    const volumeButtonType = this.state.isMusicOn
      ? circleButtonTypes.VOLUME_ON
      : circleButtonTypes.VOLUME_OFF;

    return (
      <div
        className={cn(
          'side-bar__container',
          isOpen && 'side-bar__container_open'
        )}
        onClick={onClose}
      >
        <div className={cn('side-bar', isOpen && 'side-bar_open')}>
          {!!user ? (
            <Link
              to={routeCreators.TO_PROFILE()}
              className={cn('side-bar__el')}
            >
              <div className={cn('side-bar__profile')}>
                <div>
                  <Avatar avatar={user.avatar} />
                </div>
                <div className={cn('side-bar__nickname')}>{user.nickname}</div>
              </div>
            </Link>
          ) : (
            <Link
              to={routeCreators.TO_SIGN_IN()}
              className={cn('side-bar__el')}
            >
              <div className={cn('side-bar__entry')}>
                <div>
                  <CircleButton
                    type={circleButtonTypes.PROFILE}
                    style={circleButtonStyles.BLUE}
                  />
                </div>
                <div className={cn('side-bar__entry-text')}>Вход</div>
              </div>
            </Link>
          )}
          <Link to={routeCreators.TO_START()} className={cn('side-bar__el')}>
            Играть
          </Link>
          <Link to={routeCreators.TO_RULES()} className={cn('side-bar__el')}>
            Правила
          </Link>
          <Link
            to={routeCreators.TO_LEADER_BOARD()}
            className={cn('side-bar__el')}
          >
            Лидеры
          </Link>
          <Link to={routeCreators.TO_ABOUT()} className={cn('side-bar__el')}>
            О нас
          </Link>
          <div className={cn('side-bar__el')}>
            <CircleButton
              type={volumeButtonType}
              style={circleButtonStyles.BLUE}
              onClick={this.toggleMusic}
            />
          </div>
        </div>
      </div>
    );
  }
}
