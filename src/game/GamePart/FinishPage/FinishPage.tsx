import GameButton from 'components/buttons/GameButton';
import { GameModes } from 'game/config';
import gameStore, { actionGameStop } from 'game/store';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { buttons } from './config/buttons';
import { FinishTypes } from './config/finishTypes';

const styles = require('./FinishPage.modules.scss');

const cn = classNames(styles);

export default class FinishPage extends React.Component {
  state = {
    isAuthorized: false,
    finishType: FinishTypes.DEFEAT,
  };

  componentWillUnmount() {
    gameStore.emit(actionGameStop());
  }

  render() {
    const { isAuthorized } = this.state;
    const {
      routeParams: { gameMode = GameModes.SINGLEPLAYER } = {},
    } = this.props;
    const { finishType } = this.state;

    const title = finishType === FinishTypes.WIN ? 'ПОБЕДА' : 'ПОРАЖЕНИЕ';
    const modeClassName =
      gameMode === GameModes.SINGLEPLAYER
        ? 'finish-page__title_single'
        : 'finish-page__title_multi';

    return (
      <div className={cn('finish-page')}>
        <div className={cn('finish-page__title', modeClassName)}>{title}</div>
        {gameMode === GameModes.MULTIPLAYER ? (
          <div className={cn('finish-page__rating')}>{`РЕЙТИНГ ...`}</div>
        ) : null}
        <div className={cn('finish-page__buttons-container')}>
          {buttons.map(button => (
            <GameButton
              className={cn('finish-page__game-button-container')}
              type={button.type}
              img={button.img}
              isAuthorized={button.type === 'profile' && isAuthorized}
              to={button.to}
            />
          ))}
        </div>
      </div>
    );
  }
}
