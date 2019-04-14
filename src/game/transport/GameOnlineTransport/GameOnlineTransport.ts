import { WS_URL } from 'config/API';
import { ResultPL } from 'game/store';
import { ITransport, TransportCallback } from 'game/types';
import CheburSocket, {
  cheburSocketActions,
  CheburSocketMessagePL,
} from 'libs/CheburSocket';
import Cheburstore, {
  Action,
  cheburhandler,
  cheburmodel,
} from 'libs/Cheburstore';

// @ts-ignore
@cheburmodel
export default class GameOnlineTransport extends Cheburstore<null>
  implements ITransport {
  isConnected: boolean = false;
  receiver: TransportCallback | null = null;
  connection: CheburSocket | null = null;

  async init(receiver: TransportCallback): Promise<ResultPL> {
    await this.stop();

    this.receiver = receiver;
    this.connection = new CheburSocket(WS_URL).setDispatcher(this).connect();
    return {
      success: true,
      message: 'Connected to WS',
    };
  }

  async stop(): Promise<ResultPL> {
    this.receiver = null;
    if (this.connection) {
      this.connection.disconnect();
      this.connection = null;
    }
    this.isConnected = false;
    return Promise.resolve({
      success: true,
      message: 'Successfully disconnected from WS',
    });
  }

  send(action: Action<any>) {
    if (!this.connection || !this.isConnected) {
      return;
    }

    console.log(
      `%cWS_TO ${action.type}`,
      'color: #01579B; font-weight: 700',
      action.payload
    );

    this.connection.send(
      JSON.stringify({
        type: action.type,
        payload: JSON.stringify(action.payload),
      })
    );
  }

  @cheburhandler(cheburSocketActions.DISCONNECTED)
  handleDisconnected() {
    this.isConnected = false;
  }

  @cheburhandler(cheburSocketActions.CONNECTED)
  handleConnected() {
    this.isConnected = true;
  }

  @cheburhandler(cheburSocketActions.MESSAGE)
  receive({ payload: { message } }: Action<CheburSocketMessagePL>) {
    if (!this.receiver) {
      return;
    }

    try {
      const { type, payload = null } = JSON.parse(message);
      const parsedPayload = JSON.parse(payload);
      this.receiver({
        type,
        payload: parsedPayload,
      });
    } catch (e) {
      // noinspection TsLint
      console.warn('JSON parse error for type: ', message, e);
    }
  }
}
