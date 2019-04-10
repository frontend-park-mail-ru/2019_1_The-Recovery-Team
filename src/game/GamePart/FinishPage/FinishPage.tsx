import GameButton from 'components/buttons/GameButton';
import { routeCreators } from 'config/routes';
import { GameModes } from 'game/config';
import gameStore, { actionGameStop } from 'game/store';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { FinishTypes } from './config/finishTypes';

const styles = require('./FinishPage.modules.scss');

const cn = classNames(styles);

export default class FinishPage extends React.Component {
  state = {
    buttons: [
      { type: 'reload', to: routeCreators.TO_GAME_PART() },
      { type: 'profile', to: routeCreators.TO_PROFILE() },
      { type: 'home', to: routeCreators.TO_START() },
    ],
    isAuthorized: false,
    finishType: FinishTypes.DEFEAT,
  };

  componentWillUnmount() {
    gameStore.emit(actionGameStop());
  }

  render() {
    const { buttons, isAuthorized } = this.state;
    const { mode } = gameStore.select();
    const { finishType } = this.state;

    const title = finishType === FinishTypes.WIN ? 'ПОБЕДА' : 'ПОРАЖЕНИЕ';
    const modeClassName =
      mode === GameModes.SINGLEPLAYER
        ? 'finish-page__title_single'
        : 'finish-page__title_multi';

    return (
      <div className={cn('finish-page')}>
        <div className={cn('finish-page__title', modeClassName)}>{title}</div>
        {mode === GameModes.MULTIPLAYER ? (
          <div className={cn('finish-page__rating')}>{`РЕЙТИНГ ...`}</div>
        ) : null}
        <div className={cn('finish-page__buttons-container')}>
          {buttons.map(button => (
            <GameButton
              className={cn('finish-page__game-button-container')}
              type={button.type}
              isAuthorized={button.type === 'profile' && isAuthorized}
              to={button.to}
            />
          ))}
        </div>
      </div>
    );
  }
}
