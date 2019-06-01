import { GameModels, GameModes } from 'game/config';
import { ActiveItem, anonymousUser } from 'game/config/models';
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
  actionSetOpponent,
  actionSetOpponentSearch,
  actionSetState,
  actionSetStateUpdated,
  GameInitPL,
  gameStoreActions,
  InitItemUsePL,
  InitPlayerMovePL,
  InitPlayerReadyPL,
} from './actions';
import gameStore from './index';
import stateReducer from './stateReducer';

interface GameStoreState {
  state: GameModels.GameState;
  mode: GameModes | null;
  me: UserShort | null;
  opponent: UserShort | null;
  isPlayingNow: boolean;
}

// @ts-ignore
@cheburmodel
export default class GameStore extends Cheburstore<GameStoreState> {
  transport: ITransport | null = null;
  gameStarted: boolean = false;

  constructor() {
    super();
    this.reset();
  }

  handleGameOver() {
    this.gameStarted = false;
    const myId = gameStore.selectMyId();
    const { loseRound = null } = gameStore.select().state.players[myId] || {};
    this.emit(
      actionSetGameOver({
        loseRound,
      })
    );
  }

  @cheburhandler(gameStoreActions.INIT)
  async handleInit({ payload }: Action<GameInitPL>) {
    await this.disconnect();
    this.store.me = payload.me || GameModels.anonymousUser;
    await this.connect(payload.isOnline, payload.mode);
    this.store.isPlayingNow = true;
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

  @cheburhandler(gameStoreActions.INIT_ITEM_USE)
  initItemUse(action: Action<InitItemUsePL>) {
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
      isPlayingNow: false,
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
      this.gameStarted = true;
      await this.transport.send(
        actionInitPlayerReady({
          playerId: (this.store.me as any).id,
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
      case gameTransportActions.SET_STATE_DIFF:
        if (!this.gameStarted) {
          return;
        }
        this.emit(actionSetStateUpdated());
        return;
      case gameTransportActions.SET_DISCONNECTED:
      case gameTransportActions.SET_GAME_OVER:
        this.handleGameOver();
        return;
      case gameStoreActions.SET_OPPONENT:
        this.store.opponent = action.payload;
        this.emit(actionSetOpponent());
        return;
      case gameStoreActions.SET_OPPONENT_SEARCH:
        this.emit(actionSetOpponentSearch());
        return;
    }
  };

  public selectMyId(): number {
    return this.store.me ? this.store.me.id : anonymousUser.id;
  }

  public selectMyActiveItem(): { id: number | null; item: ActiveItem | null } {
    const myId = this.selectMyId();
    let curItemId: null | number = null;
    let curItem: null | GameModels.ActiveItem = null;

    const { activeItems } = this.store.state;

    for (const [id, item] of Object.entries(activeItems)) {
      if (item && item.playerId === myId) {
        curItemId = id as any;
        curItem = item;
        break;
      }
    }

    return {
      id: curItemId,
      item: curItem,
    };
  }
}
