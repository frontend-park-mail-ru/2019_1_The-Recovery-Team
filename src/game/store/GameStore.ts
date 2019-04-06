import { Action, cheburhandler } from 'libs/Cheburstore';
import Cheburstore from 'libs/Cheburstore/Cheburstore';
import { GameModes } from '../config';
import { GameModels } from '../config';
import getTransport from '../transport/getTransport';
import { ITransport } from '../types';
import {
  actionGameInitResult,
  actionGameStopResult,
  GameInitPL,
  gameStoreActions,
} from './actions';

interface GameStoreState {
  State: GameModels.GameState;
}

export default class GameStore extends Cheburstore<GameStoreState> {
  transport: ITransport | null = null;

  @cheburhandler(gameStoreActions.INIT)
  async handleInit({ payload }: Action<GameInitPL>) {
    await this.disconnect();
    await this.connect(payload.mode);
  }

  async connect(mode: GameModes) {
    this.transport = getTransport(mode);
    const result = await this.transport.init();
    this.emit(actionGameInitResult(result));
    return this;
  }

  @cheburhandler(gameStoreActions.STOP)
  async disconnect() {
    if (this.transport) {
      const result = await this.transport.stop();
      this.emit(actionGameStopResult(result));
    } else {
      this.emit(
        actionGameStopResult({
          success: true,
          message: 'Игра уже остановлена',
        })
      );
    }

    return this;
  }
}
