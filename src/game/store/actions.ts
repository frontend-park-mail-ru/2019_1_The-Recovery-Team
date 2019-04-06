import { ACreator, ACreatorNull } from 'store/types';
import { GameModes } from '../config';

export enum gameStoreActions {
  INIT = 'GAME_STORE_INIT',
  INIT_RESULT = 'GAME_STORE_INIT_RESULT',

  STOP = 'GAME_STOP',
  STOP_RESULT = 'STOP_RESULT',
}

export interface GameInitPL {
  mode: GameModes;
}

export interface ResultPL {
  success: boolean;
  message?: string;
}

export const actionGameInit: ACreator<GameInitPL> = payload => ({
  payload,
  type: gameStoreActions.INIT,
});

export const actionGameInitResult: ACreator<ResultPL> = payload => ({
  payload,
  type: gameStoreActions.INIT_RESULT,
});

export const actionGameStop: ACreatorNull = () => ({
  payload: null,
  type: gameStoreActions.STOP,
});

export const actionGameStopResult: ACreator<ResultPL> = payload => ({
  payload,
  type: gameStoreActions.STOP_RESULT,
});
