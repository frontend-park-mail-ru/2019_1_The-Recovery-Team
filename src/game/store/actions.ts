import { GameModels, GameModes } from 'game/config';
import { ACreator, ACreatorNull } from 'store/types';
import { UserShort } from 'store/userStore';

export enum gameStoreActions {
  INIT = 'GAME_STORE_INIT',
  INIT_RESULT = 'GAME_STORE_INIT_RESULT',

  INIT_STOP = 'GAME_STOP',
  STOP_RESULT = 'STOP_RESULT',

  INIT_PLAYER_READY = 'INIT_PLAYER_READY',
  INIT_PLAYER_MOVE = 'INIT_PLAYER_MOVE',

  SET_STATE = 'SET_STATE',
  SET_STATE_UPDATED = 'SET_STATE_UPDATED',

  SET_OPPONENT = 'SET_OPPONENT',

  SET_GAME_OVER = 'SET_GAME_OVER',
}

export interface GameInitPL {
  isOnline: boolean;
  mode: GameModes;
  me: UserShort | null; // null в случае offline singleplayer
}

export interface ResultPL {
  success: boolean;
  message?: string;
}

export interface InitPlayerReadyPL {
  playerId: number;
}

export interface InitPlayerMovePL {
  playerId: number;
  move: GameModels.Direction;
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
  type: gameStoreActions.INIT_STOP,
});

export const actionGameStopResult: ACreator<ResultPL> = payload => ({
  payload,
  type: gameStoreActions.STOP_RESULT,
});

export const actionInitPlayerReady: ACreator<InitPlayerReadyPL> = payload => ({
  payload,
  type: gameStoreActions.INIT_PLAYER_READY,
});

export const actionSetGameOver: ACreatorNull = () => ({
  payload: null,
  type: gameStoreActions.SET_GAME_OVER,
});

export const actionInitPlayerMove: ACreator<InitPlayerMovePL> = payload => ({
  payload,
  type: gameStoreActions.INIT_PLAYER_MOVE,
});

export const actionSetState: ACreatorNull = () => ({
  payload: null,
  type: gameStoreActions.SET_STATE,
});

export const actionSetStateUpdated: ACreatorNull = () => ({
  payload: null,
  type: gameStoreActions.SET_STATE_UPDATED,
});

export const actionSetOpponent: ACreatorNull = () => ({
  payload: null,
  type: gameStoreActions.SET_OPPONENT,
});
