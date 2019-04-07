// События, специфичные для данного вида транспорта

import { ACreator } from 'store/types';

export enum gameOfflineTransportActions {
  INIT_PLAYERS = 'INIT_PLAYERS',
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
