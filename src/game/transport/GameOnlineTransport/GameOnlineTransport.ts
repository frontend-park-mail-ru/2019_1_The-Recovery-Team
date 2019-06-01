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
import { gameTransportActions } from '../actions';

// @ts-ignore
@cheburmodel
export default class GameOnlineTransport extends Cheburstore<null>
  implements ITransport {
  isConnected: boolean = false;
  receiver: TransportCallback | null = null;
  connection: CheburSocket | null = null;

  init(receiver: TransportCallback): ResultPL {
    this.stop();

    this.receiver = receiver;
    this.connection = new CheburSocket(WS_URL).setDispatcher(this).connect();
    return {
      success: true,
      message: 'Connected to WS',
    };
  }

  stop(): ResultPL {
    if (!this.isConnected) {
      return { success: false, message: '' };
    }

    this.receiver = null;
    if (this.connection) {
      this.connection.disconnect();
      this.connection = null;
    }

    this.isConnected = false;
    return {
      success: true,
      message: 'Successfully disconnected from WS',
    };
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
    if (this.receiver) {
      this.receiver({
        type: gameTransportActions.SET_DISCONNECTED,
        payload: null,
      });
    }

    this.stop();
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
      this.receiver({ type, payload });
    } catch (e) {
      // noinspection TsLint
      console.warn('JSON parse error for type: ', message, e);
    }
  }
}
