import { GameModels, GameModes } from 'game/config';
import getTransport, { gameTransportActions } from 'game/transport';
import { actionGameOfflineInitPlayers } from 'game/transport/GameOfflineTransport';
import { ITransport } from 'game/types';
import { Action, cheburhandler, cheburmodel } from 'libs/Cheburstore';
import Cheburstore from 'libs/Cheburstore/Cheburstore';
import { UserShort } from 'store/userStore';
import {
  actionGameInitResult,
  actionGameStopResult,
  actionInitPlayerReady,
  actionSetGameOver,
  actionSetState,
  actionSetStateUpdated,
  GameInitPL,
  gameStoreActions,
  InitPlayerMovePL,
  InitPlayerReadyPL,
} from './actions';
import stateReducer from './stateReducer';
import { anonymousUser } from '../config/models';

interface GameStoreState {
  state: GameModels.GameState;
  mode: GameModes | null;
  me: UserShort | null;
  opponent: UserShort | null;
}

// @ts-ignore
@cheburmodel
export default class GameStore extends Cheburstore<GameStoreState> {
  transport: ITransport | null = null;

  constructor() {
    super();
    this.reset();
  }

  handleGameOver() {
    this.emit(actionSetGameOver());
  }

  @cheburhandler(gameStoreActions.INIT)
  async handleInit({ payload }: Action<GameInitPL>) {
    await this.disconnect();
    this.store.me = payload.me || GameModels.anonymousUser;
    await this.connect(payload.isOnline, payload.mode);
  }

  @cheburhandler(gameStoreActions.INIT_STOP)
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
      state: GameModels.initialGameState,
      mode: null,
      me: null,
      opponent: null,
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
    if (!this.transport || !this.store.me) {
      return;
    }

    if (this.store.mode === GameModes.SINGLEPLAYER) {
      this.transport.send(
        actionGameOfflineInitPlayers({
          playerIds: [this.store.me.id],
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
        window.requestAnimationFrame(() => this.emit(actionSetState()));
        return;
      case gameTransportActions.SET_STATE_DIFF:
        window.requestAnimationFrame(() => this.emit(actionSetStateUpdated()));
        return;
      case gameTransportActions.SET_GAME_OVER:
        this.handleGameOver();
    }
  };

  public selectMyId(): number {
    return this.store.me ? this.store.me.id : anonymousUser.id;
  }
}
