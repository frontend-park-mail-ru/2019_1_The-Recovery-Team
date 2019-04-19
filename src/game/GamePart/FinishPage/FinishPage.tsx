import GameButton from 'components/buttons/GameButton';
import { buttonTypes } from 'components/buttons/GameButton/config';
import { homeImg, profileImg, reloadImg } from 'config/images';
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
          <GameButton
            className={cn('finish-page__game-button-container')}
            type={buttonTypes.RELOAD}
            img={reloadImg}
            to={routeCreators.TO_GAME_PART()}
          />
          <GameButton
            className={cn('finish-page__game-button-container')}
            type={buttonTypes.PROFILE}
            img={profileImg}
            isAuthorized={isAuthorized}
            to={routeCreators.TO_PROFILE()}
          />
          <GameButton
            className={cn('finish-page__game-button-container')}
            type={buttonTypes.HOME}
            img={homeImg}
            to={routeCreators.TO_START()}
          />
        </div>
      </div>
    );
  }
}
