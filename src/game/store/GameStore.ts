import { Action, cheburhandler, cheburmodel } from 'libs/Cheburstore';
import Cheburstore from 'libs/Cheburstore/Cheburstore';
import { GameModels, GameModes } from '../config';
import { initialGameState } from '../config/models';
import { gameTransportActions } from '../transport/actions';
import { actionGameOfflineInitPlayers } from '../transport/GameOfflineTransport/actions';
import getTransport from '../transport/getTransport';
import { ITransport } from '../types';
import {
  actionGameInitResult,
  actionGameStopResult,
  actionInitPlayerReady,
  actionSetState,
  actionSetStateUpdated,
  GameInitPL,
  gameStoreActions,
  InitPlayerMovePL,
  InitPlayerReadyPL,
} from './actions';
import stateReducer from './stateReducer';

interface GameStoreState {
  state: GameModels.GameState;
  mode: GameModes | null;
}

// @ts-ignore
@cheburmodel
export default class GameStore extends Cheburstore<GameStoreState> {
  transport: ITransport | null = null;

  constructor() {
    super();
    this.reset();
  }

  @cheburhandler(gameStoreActions.INIT)
  async handleInit({ payload }: Action<GameInitPL>) {
    await this.disconnect();
    await this.connect(payload.isOnline, payload.mode);
  }

  @cheburhandler(gameStoreActions.STOP)
  async disconnect() {
    this.reset();

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
  }

  @cheburhandler(gameStoreActions.INIT_PLAYER_READY)
  initPlayerReady(action: Action<InitPlayerReadyPL>) {
    if (!this.transport) {
      return;
    }

    this.transport.send(action);
  }

  @cheburhandler(gameStoreActions.INIT_PLAYER_MOVE)
  initPlayerMove(action: Action<InitPlayerMovePL>) {
    if (!this.transport) {
      return;
    }

    this.transport.send(action);
  }

  private reset() {
    this.store = {
      state: initialGameState,
      mode: null,
    };
    return this;
  }

  private async connect(isOnline: boolean, mode: GameModes) {
    this.transport = getTransport(isOnline, mode);
    this.store.mode = mode;
    const result = await this.transport.init(this.receiver);

    if (!isOnline) {
      this.processOfflineSpecificInit();
    }

    this.emit(actionGameInitResult(result));
  }

  private processOfflineSpecificInit() {
    if (!this.transport) {
      return;
    }

    if (this.store.mode === GameModes.SINGLEPLAYER) {
      this.transport.send(
        actionGameOfflineInitPlayers({
          playerIds: [1],
        })
      );
    }
  }

  private receiverMiddleware = async (action: Action<any>) => {
    // noinspection TsLint
    console.log(
      `%cENGINE_FROM: ${action.type}`,
      'color: #FF6D00; font-weight: 700;',
      action.payload
    );

    if (action.type === gameTransportActions.SET_STATE && this.transport) {
      await this.transport.send(
        actionInitPlayerReady({
          playerId: 1,
        })
      );
    }
  };

  private receiver = async (action: Action<any>) => {
    await this.receiverMiddleware(action);

    this.store.state = stateReducer(this.store.state, action);
    switch (action.type) {
      case gameTransportActions.SET_STATE:
        this.emit(actionSetState());
        return;
      default:
        this.emit(actionSetStateUpdated());
    }
  };
}
