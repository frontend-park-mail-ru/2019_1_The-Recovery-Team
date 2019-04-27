import { cheburSocketActions, CheburSocketMessagePL } from 'libs/CheburSocket';
import CheburSocket from 'libs/CheburSocket/CheburSocket';
import { Action, cheburhandler, cheburmodel } from 'libs/Cheburstore';
import Cheburstore from 'libs/Cheburstore/Cheburstore';
import {
  actionChatConnected,
  actionChatDisconnected,
  chatActions,
  ChatInitMessagePL,
} from './actions';
import { ChatMessage, ChatState } from './types';
import { normalizeMessageSetPyload } from './utils/normalizeWSAction';
import { wsActions } from './wsActions';

const CHAT_URL = 'wss://hackathon.sadislands.ru/api/v1/chat.ws';

// @ts-ignore
@cheburmodel
class ChatStore extends Cheburstore<ChatState> {
  store = {
    messageIds: [],
    messages: {},
    users: {},
  };
  connection: CheburSocket | null = null;
  isConnected: boolean = false;

  @cheburhandler(chatActions.INITIALIZE)
  handleInitialize() {
    if (this.connection) {
      this.connection.disconnect();
      this.connection = null;
    }
    this.connection = new CheburSocket(CHAT_URL).setDispatcher(this).connect();
  }

  @cheburhandler(chatActions.INIT_MESSAGE)
  handleInitMessage(action: Action<ChatInitMessagePL>) {
    if (this.isConnected && this.connection) {
      this.connection.send(
        JSON.stringify({
          type: wsActions.INIT_CHAT_MESSAGE,
          payload: JSON.stringify(action.payload),
        })
      );
    }
  }

  @cheburhandler(cheburSocketActions.CONNECTED)
  handleWSConnected() {
    this.emit(actionChatConnected());
    this.isConnected = true;
  }

  @cheburhandler(cheburSocketActions.DISCONNECTED)
  handleWSDisconnected() {
    this.emit(actionChatDisconnected());
    this.isConnected = false;
  }

  @cheburhandler(cheburSocketActions.MESSAGE)
  handleWSMessage(action: Action<CheburSocketMessagePL>) {
    const { message } = action.payload;

    try {
      const { type, payload = null } = JSON.parse(message);

      switch (type) {
        case wsActions.SET_CHAT_MESSAGE:
          this.processGetMessage(normalizeMessageSetPyload(payload));
      }
    } catch (e) {
      console.log('chat error: ', action);
    }
  }

  processGetMessage(message: ChatMessage) {}

  async loadUser() {}
}

export default new ChatStore();
