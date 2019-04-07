import { GameModes } from 'game/config';
import { ResultPL } from 'game/store/actions';
import { ITransport, TransportCallback } from 'game/types';
import { Action } from 'libs/Cheburstore';

const {
  initEngine,
}: {
  initEngine: OfflineEngine;
} = require('./engine/index');

export default class GameOfflineTransport implements ITransport {
  mode: GameModes | null = null;

  sender: Sender | null = null;
  receiver: TransportCallback | null = null;

  constructor(mode: GameModes) {
    this.mode = mode;
  }

  async init(receiver: TransportCallback): Promise<ResultPL> {
    if (this.sender) {
      await this.stop();
    }

    this.receiver = receiver;
    this.sender = initEngine(this.receive);

    return Promise.resolve({
      success: true,
      message: 'Successfully started engine',
    });
  }

  async stop(): Promise<ResultPL> {
    // TODO: send to sender stop action
    this.receiver = null;
    this.sender = null;
    return Promise.resolve({
      success: false,
      message: 'GameOfflineTransport not implemented',
    });
  }

  send(action: Action<any>) {
    if (!this.sender) {
      return;
    }

    console.log(
      `%cENGINE_TO ${action.type}`,
      'color: #01579B; font-weight: 700',
      action.payload
    );

    this.sender(
      JSON.stringify({
        type: action.type,
        payload: JSON.stringify(action.payload),
      })
    );
  }

  private receive: ReceiverCallback = (type: string, payload: string) => {
    if (!this.receiver) {
      return;
    }

    try {
      const parsedPayload = JSON.parse(payload);

      this.receiver({
        type,
        payload: parsedPayload,
      });
    } catch (e) {
      // noinspection TsLint
      console.warn('JSON parse error for type: ', type, e);
    }
  };
}
