// События, специфичные для данного вида транспорта

import { ACreator, ACreatorNull } from 'store/types';

export enum gameOfflineTransportActions {
  INIT_PLAYERS = 'INIT_PLAYERS',
  INIT_ENGINE_STOP = 'INIT_ENGINE_STOP',
}

export interface InitPlayersPL {
  playerIds: Array<number>;
}

export const actionGameOfflineInitPlayers: ACreator<
  InitPlayersPL
> = payload => ({
  payload,
  type: gameOfflineTransportActions.INIT_PLAYERS,
});

export const actionInitGameStop: ACreatorNull = () => ({
  payload: null,
  type: gameOfflineTransportActions.INIT_ENGINE_STOP,
});
