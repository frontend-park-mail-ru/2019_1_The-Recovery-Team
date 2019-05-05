import PlayButtonNew, {
  playButtonTypes,
} from 'components/buttons/PlayButtonNew';
import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { gamePageTypes } from '../gamePageTypes';
// import ShortcutsModule from '../ShortcutsModule/ShortcutsModule';
const styles = require('./ModalWindow.scss');

const cn = classNames(styles);

export default class ModalWindow extends React.Component {
  render() {
    const { mode, type = null, onClose, onGiveUp } = this.props;
    const hasTrophy = type === gamePageTypes.WIN || type === gamePageTypes.LOSE;
    let pageTitle;
    let playButtons = [];

    switch (type) {
      case gamePageTypes.INFO: {
        pageTitle = 'Информация';
        playButtons = [
          {
            type: playButtonTypes.RESTART,
            to: routeCreators.TO_GAME_PART(mode),
          },
          {
            type: playButtonTypes.PLAY,
            onClick: onClose,
          },
          {
            type: playButtonTypes.FINISH,
            onClick: onGiveUp,
          },
        ];
        break;
      }
      case gamePageTypes.WIN:
      case gamePageTypes.LOSE: {
        pageTitle = type === gamePageTypes.WIN ? 'Победа' : 'Поражение';
        playButtons = [
          {
            type: playButtonTypes.RESTART,
            to: routeCreators.TO_GAME_PART(mode),
            onClick: null,
          },
          {
            type: playButtonTypes.PROFILE,
            to: routeCreators.TO_PROFILE(),
            onClick: null,
          },
          {
            type: playButtonTypes.HOME,
            to: routeCreators.TO_START(),
            onClick: null,
          },
        ];
        break;
      }
      case gamePageTypes.SEARCH:
        pageTitle = 'Поиск игрока...';
    }

    return (
      <div className={cn('modal-window', type && 'modal-window_open')}>
        <div className={cn('modal-window__title', !hasTrophy && 'modal-window__title_mb')}>{pageTitle}</div>
        {hasTrophy ? <div className={cn('modal-window__trophy')} /> : null}
        <div className={cn('modal-window__game-buttons-container')}>
          {playButtons.map(({ type, to, onClick }) => (
            <PlayButtonNew
              className={cn('modal-window__game-button-container')}
              type={type}
              to={to}
              onClick={onClick}
            />
          ))}
        </div>
        <div className={cn('modal-window__shortcuts')} />
      </div>
    );
  }
}
