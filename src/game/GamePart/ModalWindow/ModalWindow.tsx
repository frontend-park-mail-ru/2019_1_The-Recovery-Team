import CircleButton from 'components/buttons/CircleButton';
import {
  circleButtonStyles,
  circleButtonTypes,
} from 'components/buttons/CircleButton/modes';
import PlayButtonNew, {
  playButtonTypes,
} from 'components/buttons/PlayButtonNew';
import SharingButton from 'components/buttons/SharingButton';
import { loader } from 'config/images';
import { routeCreators } from 'config/routes';
import { GameModes } from 'game/config';
import gameStore from 'game/store';
import * as React from 'libs/Cheburact';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import musicStore, {
  actionMusicOff,
  actionMusicOn,
  musicActions,
  MusicChangedPL,
} from 'store/musicStore';
import userStore, { actionUserUpdate, userActions } from 'store/userStore';

import { gamePageTypes } from '../gamePageTypes';

const controllersImg = require('config/img/controllers.svg');
const controllers2Img = require('config/img/controllers2.svg');
const styles = require('./ModalWindow.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class ModalWindow extends React.Component {
  state = {
    isMusicOn: musicStore.select().isOn,
    user: userStore.select().user,
  };

  @onCheburevent(musicStore, musicActions.CHANGED)
  handleChangeSound({ payload }: Action<MusicChangedPL>) {
    this.setState({
      isMusicOn: payload.isOn,
    });
  }

  componentDidUpdate(prevProps) {
    const { type = null } = this.props;

    if (
      type !== prevProps.type &&
      (type === gamePageTypes.WIN || type === gamePageTypes.LOSE)
    ) {
      userStore.emit(actionUserUpdate());
    }
  }

  @onCheburevent(userStore, userActions.UPDATE_SUCCESS)
  handleUpdateUser() {
    this.setState({
      user: userStore.select().user,
    });
  }

  getTitle(): string {
    const { type, mode } = this.props;
    switch (type) {
      case gamePageTypes.INFO:
        return 'Информация';
      case gamePageTypes.LOSE:
        return mode === GameModes.SINGLEPLAYER ? 'Игра окончена' : 'Поражение';
      case gamePageTypes.SEARCH:
        return 'Поиск игрока';
      case gamePageTypes.WIN:
        return mode === GameModes.SINGLEPLAYER ? 'Игра окончена' : 'Победа!';
    }
    return '';
  }

  getButtons(): Array<{
    type: playButtonTypes;
    onClick?: () => void;
    to?: string;
  }> {
    const { type = null, onClose, onGiveUp, onReload, mode } = this.props;

    const reloadButton = {
      type: playButtonTypes.RESTART,
      onClick: onReload,
      key: playButtonTypes.RESTART,
      description: 'Начать заново',
    };
    const continueButton = {
      type: playButtonTypes.PLAY,
      onClick: onClose,
      key: playButtonTypes.PLAY,
      description: 'Продолжить',
    };
    const finishButton = {
      type: playButtonTypes.FINISH,
      onClick: onGiveUp,
      key: playButtonTypes.FINISH,
      description: 'Сдаться',
    };

    if (type === gamePageTypes.INFO) {
      return mode === GameModes.SINGLEPLAYER
        ? [reloadButton, continueButton, finishButton]
        : [continueButton, finishButton];
    }

    const profileButton = {
      type: playButtonTypes.PROFILE,
      to: routeCreators.TO_PROFILE(),
      key: playButtonTypes.PROFILE,
      description: 'Профиль',
    };
    const homeButton = {
      type: playButtonTypes.HOME,
      to: routeCreators.TO_START(),
      key: playButtonTypes.HOME,
      description: 'Главная страница',
    };

    if (type === gamePageTypes.SEARCH) {
      return [profileButton, homeButton];
    }

    return [reloadButton, profileButton, homeButton];
  }

  toggleMusic = () => {
    if (this.state.isMusicOn) {
      musicStore.emit(actionMusicOff());
    } else {
      musicStore.emit(actionMusicOn());
    }
  };

  getStats = () => {
    const {
      me,
      state: { roundNumber } = { roundNumber: 1 },
    } = gameStore.select();

    const { record: prevRecord } = me || { record: 0 };
    const { record: nextRecord } = this.state.user || { record: 0 };

    return {
      prevRecord,
      nextRecord,
      roundNumber,
    };
  };

  render() {
    const { type = null, mode = GameModes.SINGLEPLAYER } = this.props;
    const hasTrophy = type === gamePageTypes.WIN || type === gamePageTypes.LOSE;
    const title = this.getTitle();
    const buttons = [...this.getButtons()];
    const volumeButtonType = this.state.isMusicOn
      ? circleButtonTypes.VOLUME_ON
      : circleButtonTypes.VOLUME_OFF;

    const stats = this.getStats();

    return (
      <div className={cn('modal-window', type && 'modal-window_open')}>
        <CircleButton
          className={cn('modal-window__volume-button')}
          type={volumeButtonType}
          style={circleButtonStyles.BLUE_FILL}
          onClick={this.toggleMusic}
        />
        <div className={cn('modal-window__title')}>{title}</div>
        {hasTrophy && (
          <div className={cn('modal-window__trophy')}>
            <SharingButton className={cn('modal-window__sharing-button')} />
            {mode === GameModes.MULTIPLAYER && (
              <div
                className={cn(
                  'modal-window__stats',
                  'modal-window__stats_left'
                )}
              >
                <div className={cn('modal-window__rating')}>Рейтинг:</div>
                <div className={cn('modal-window__next-record')}>
                  {stats.nextRecord.toString()}
                </div>
              </div>
            )}
            <div
              className={cn('modal-window__stats', 'modal-window__stats_right')}
            >
              <div className={cn('modal-window__rating')}>Раунд:</div>
              <div className={cn('modal-window__next-record')}>
                {stats.roundNumber.toString()}
              </div>
            </div>
          </div>
        )}
        <div>
          {type === gamePageTypes.SEARCH && (
            <img
              alt="Загрузка"
              key="loader"
              src={loader}
              className={cn('modal-window__loader')}
            />
          )}
        </div>
        <div className={cn('modal-window__game-buttons-container')}>
          {buttons.map(params => (
            <PlayButtonNew
              className={cn('modal-window__game-button-container')}
              {...params}
            />
          ))}
        </div>
        <div className={cn('modal-window__shortcuts')}>
          <img
              src={controllersImg}
              className={cn('modal-window__controllers-img')}
          />
          <img
              src={controllers2Img}
              className={cn('modal-window__controllers-img')}
          />
        </div>
      </div>
    );
  }
}
