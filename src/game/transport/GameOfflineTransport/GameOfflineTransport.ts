import { Action } from 'libs/Cheburstore';
import { GameModes } from '../../config';
import { ResultPL } from '../../store/actions';
import { ITransport } from '../../types';

export default class GameOfflineTransport implements ITransport {
  mode: GameModes | null = null;
  engine: OfflineEngine | null = null;
  sender: Sender;

  constructor(mode: GameModes) {
    this.mode = mode;
  }

  init(): Promise<ResultPL> {
    return Promise.resolve({
      success: false,
      message: 'GameOfflineTransport not implemented',
    });
  }

  stop(): Promise<ResultPL> {
    return Promise.resolve({
      success: false,
      message: 'GameOfflineTransport not implemented',
    });
  }

  recieve(type: string, payload: string) {

  }

  send(action: Action<any>) {
    this.sender(
      JSON.stringify({
        type: action.type,
        payload: JSON.stringify(action.payload),
      })
    );
  }
}
