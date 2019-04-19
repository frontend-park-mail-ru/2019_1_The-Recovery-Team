import GameButton from 'components/buttons/GameButton';
import { routeCreators } from 'config/routes';
import { GameModes } from 'game/config';
import gameStore, { actionGameStop } from 'game/store';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { FinishTypes } from './config/finishTypes';
export const reloadImg = require('config/img/Reload.svg');
export const profileImg = require('config/img/Profile.svg');
export const homeImg = require('config/img/Home.svg');

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
            buttonClass={cn('finish-page__game-button-container')}
            type={'reload'}
            img={reloadImg}
            to={routeCreators.TO_GAME_PART()}
          />
          <GameButton
            buttonClass={cn('finish-page__game-button-container')}
            type={'profile'}
            img={profileImg}
            isAuthorized={isAuthorized}
            to={routeCreators.TO_PROFILE()}
          />
          <GameButton
            buttonClass={cn('finish-page__game-button-container')}
            type={'home'}
            img={homeImg}
            to={routeCreators.TO_START()}
          />
        </div>
      </div>
    );
  }
}
