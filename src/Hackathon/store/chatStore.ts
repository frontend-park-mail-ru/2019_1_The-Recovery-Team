import API from 'config/API';
import isProd from 'config/isProd';
import CheburSocket, {
  cheburSocketActions,
  CheburSocketMessagePL,
} from 'libs/CheburSocket';
import Cheburstore, {
  Action,
  cheburhandler,
  cheburmodel,
} from 'libs/Cheburstore';
import Requester from 'libs/Requester/Requester';
import userStore, { normalizeProfileGet, UserShort } from 'store/userStore';
import {
  actionChatConnected,
  actionChatDisconnected,
  actionChatSetMessage,
  chatActions,
  ChatInitMessagePL,
} from './actions';
import { ChatMessage, ChatState } from './types';
import { normalizeMessageSetPyload } from './utils/normalizeWSAction';
import { wsActions } from './wsActions';

const CHAT_URL = isProd
  ? 'wss://hackathon.sadislands.ru/api/v1/chat.ws'
  : 'ws://localhost:9000/api/v1/chat.ws';

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
          // don't await
          this.processGetMessage(normalizeMessageSetPyload(payload));
      }
    } catch (e) {
      console.log('chat error: ', action);
    }
  }

  async processGetMessage(message: ChatMessage) {
    if (message.authorId !== null && this.store.users[message.authorId]) {
      await this.loadUser(message.authorId);
    }

    if (!this.store.messages[message.messageId]) {
      // @ts-ignore
      this.store.messageIds.push(message.messageId);
    }
    this.store.messages[message.messageId] = message;

    this.emit(actionChatSetMessage(message));
  }

  async loadUser(userId) {
    const { user } = userStore.select();
    console.log(user);
    if (user && user.id === userId) {
      // не грузим себя
      return;
    }

    const { response } = await Requester.get(API.profileItem(userId));
    if (response) {
      const user: UserShort | null = normalizeProfileGet(response);
      if (user) {
        this.store.users[userId] = user;
      }
    }
  }
}

export default new ChatStore();
