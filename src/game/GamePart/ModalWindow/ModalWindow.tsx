import PlayButtonNew, {
  playButtonTypes,
} from 'components/buttons/PlayButtonNew';
import { routeCreators } from 'config/routes';
import { GameModes } from 'game/config';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { gamePageTypes } from '../gamePageTypes';
const styles = require('./ModalWindow.modules.scss');

const cn = classNames(styles);

export default class ModalWindow extends React.Component {
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
    };
    const continueButton = {
      type: playButtonTypes.PLAY,
      onClick: onClose,
    };
    const finishButton = {
      type: playButtonTypes.FINISH,
      onClick: onGiveUp,
    };

    if (type === gamePageTypes.INFO) {
      return mode === GameModes.SINGLEPLAYER
        ? [reloadButton, continueButton, finishButton]
        : [continueButton, finishButton];
    }

    const profileButton = {
      type: playButtonTypes.PROFILE,
      to: routeCreators.TO_PROFILE(),
    };
    const homeButton = {
      type: playButtonTypes.HOME,
      to: routeCreators.TO_START(),
    };

    if (type === gamePageTypes.SEARCH) {
      return [profileButton, homeButton];
    }

    return [reloadButton, profileButton, homeButton];
  }

  render() {
    const { type = null } = this.props;
    const hasTrophy = type === gamePageTypes.WIN || type === gamePageTypes.LOSE;
    const title = this.getTitle();
    const buttons = [...this.getButtons()];
    console.log(buttons);

    return (
      <div className={cn('modal-window', type && 'modal-window_open')}>
        <div
          className={cn(
            'modal-window__title',
            !hasTrophy && 'modal-window__title_mb'
          )}
        >
          {title}
        </div>
        {hasTrophy && <div className={cn('modal-window__trophy')} />}
        <div className={cn('modal-window__game-buttons-container')}>
          {buttons.map(params => (
            <PlayButtonNew
              className={cn('modal-window__game-button-container')}
              {...params}
            />
          ))}
        </div>
        <div className={cn('modal-window__shortcuts')} />
      </div>
    );
  }
}
