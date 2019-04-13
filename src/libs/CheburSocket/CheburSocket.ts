import Cheburstore, { Action } from 'libs/Cheburstore';
import {
  actionCheburSocketConnected,
  actionCheburSocketDisonnected,
  actionCheburSocketMessage,
} from './actions';

const PING_INTERVAL = 2000;
const PING_TIMEOUT = 1000;
const RECONNECT_TIMEOUT = 1000;

const PING_ACTION: Action<null> = {
  type: 'INIT_PING',
  payload: null,
};

const PONG_TYPE = 'SET_PONG';

export default class CheburSocket {
  private connection: WebSocket | null = null;

  private url: string | null = null;
  private dispatcher: Cheburstore<any> | null = null;

  private forseStop: boolean = false;
  private pingInterval: any = null;
  private pingTimeout: any = null;
  private reconnectTimeout: any = null;

  constructor(url: string) {
    this.setUrl(url);
  }

  setUrl(url: string) {
    this.url = url;
    return this;
  }

  setDispatcher(dispatcher: Cheburstore<any>) {
    this.dispatcher = dispatcher;
    if (this.connection) {
      this.dispatcher.emit(actionCheburSocketConnected());
    } else {
      this.dispatcher.emit(actionCheburSocketDisonnected());
    }
    return this;
  }

  send(message: Object) {
    if (this.connection) {
      console.log('<<< SEND: ', message);
      try {
        this.connection.send(JSON.stringify(message));
      } catch {
        console.warn('can not send message');
      }
    }

    return this;
  }

  connect = () => {
    if (this.connection || !this.url) {
      return this;
    }

    this.forseStop = false;
    this.connection = new WebSocket(this.url);
    console.log('>>> CONNECTED');

    this.connection.addEventListener('open', this.handleOpen);
    this.connection.addEventListener('close', () => this.handleClose(false));
    this.connection.addEventListener('message', this.handleMessage);
    this.connection.addEventListener('error', () => null);

    return this;
  };

  disconnect(): CheburSocket {
    this.forseStop = true;
    return this.resetPingInterval()
      .resetPingTimeout()
      .resetReconnectTimeout()
      .close();
  }

  private resetPingTimeout(): CheburSocket {
    if (this.pingTimeout) {
      clearTimeout(this.pingTimeout);
      this.pingTimeout = null;
    }

    return this;
  }

  private resetPingInterval(): CheburSocket {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }

    return this;
  }

  private resetReconnectTimeout(): CheburSocket {
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }

    return this;
  }

  private startPingInterval(): CheburSocket {
    if (this.pingInterval === null && !this.forseStop) {
      this.pingInterval = setInterval(this.doPing, PING_INTERVAL);
    }
    return this;
  }

  private close(): CheburSocket {
    if (this.connection) {
      this.connection.close();
      this.connection = null;
    }
    return this;
  }

  private doPing = () => {
    this.resetPingTimeout().send(PING_ACTION);
    if (this.connection && !this.forseStop) {
      this.pingTimeout = setTimeout(() => this.handleClose(true), PING_TIMEOUT);
    }
  };

  private handleOpen = () => {
    console.log('>>> OPEN');

    if (this.dispatcher) {
      this.dispatcher.emit(actionCheburSocketConnected());
    }

    this.resetPingTimeout().startPingInterval();
  };

  private handleClose = (withClose?: boolean) => {
    console.log('>>> CLOSE');

    if (withClose) {
      this.close();
    } else {
      this.connection = null;
    }

    this.resetPingTimeout();

    if (this.dispatcher) {
      this.dispatcher.emit(actionCheburSocketDisonnected());
    }
    this.reconnect();
  };

  private reconnect(): CheburSocket {
    console.log('>>> TRY TO RECONNECT');
    if (!this.forseStop) {
      this.reconnectTimeout = setTimeout(this.connect, RECONNECT_TIMEOUT);
    }
    return this;
  }

  private handleMessage = message => {
    this.resetPingTimeout();

    console.log('message from socket: ', message, message.data);
    if (message.data.includes(PONG_TYPE)) {
      return;
    }

    if (this.dispatcher) {
      this.dispatcher.emit(
        actionCheburSocketMessage({
          message: message.data,
        })
      );
    }
  };
}
