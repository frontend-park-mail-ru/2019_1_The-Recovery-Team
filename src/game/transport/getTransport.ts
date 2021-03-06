import { GameModes } from '../config';
import { ITransport } from '../types';
import GameOfflineTransport from './GameOfflineTransport';
import GameOnlineTransport from './GameOnlineTransport';

const logErr = (isOnline: boolean, type: string) => {
  const msg = `%c [online: ${isOnline}]. transport for ${type} not implemented`;
  // noinspection TsLint
  console.log(msg, 'color: red');
  return msg;
};

export default (isOnline: boolean, mode: GameModes): ITransport => {
  switch (mode) {
    case GameModes.MULTIPLAYER:
      if (isOnline) {
        return new GameOnlineTransport();
      }
      throw new Error(logErr(isOnline, mode));
    case GameModes.SINGLEPLAYER:
      if (!isOnline) {
        return new GameOfflineTransport(mode);
      }
      return new GameOnlineTransport();
  }
};
