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
import { normalizeProfileGet, UserShort } from 'store/userStore';
import {
  actionChatConnected,
  actionChatDisconnected,
  actionChatSetGlobalMessages,
  actionChatSetMessage,
  actionChatSetSession,
  chatActions,
  ChatInitMessagePL,
} from './actions';
import { ChatMessage, ChatState } from './types';
import {
  normalizeMessageSetPayload,
  normalizeSetGlobalMessages,
  normalizeSetSessionPayload,
} from './utils/normalizeWSAction';
import { wsActions } from './wsActions';

const CHAT_URL = isProd
  ? 'wss://hackathon.sadislands.ru/api/v1/chat.ws'
  : 'ws://localhost:9000/api/v1/chat.ws';

const MESSAGE_LIST_LIMIT = 2;

// @ts-ignore
@cheburmodel
class ChatStore extends Cheburstore<ChatState> {
  store: ChatState = {
    messageIds: [],
    messages: {},
    users: {},
    mySessionId: null,
  };
  messagesListRequested: boolean = false;
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

  sendPlToWS(type, payload) {
    if (this.isConnected && this.connection) {
      this.connection.send(
        JSON.stringify({
          type,
          payload: JSON.stringify(payload),
        })
      );
    }
  }

  @cheburhandler(chatActions.INIT_MESSAGE)
  handleInitMessage(action: Action<ChatInitMessagePL>) {
    this.sendPlToWS(wsActions.INIT_CHAT_MESSAGE, action.payload);
  }

  @cheburhandler(chatActions.INIT_GLOBAL_MESSAGES)
  handleInitGlobalMessages() {
    if (this.messagesListRequested) {
      return;
    }

    const oldestMsgId = this.store.messageIds[0] || 0;
    const payload = oldestMsgId
      ? {
          start: oldestMsgId,
          limit: MESSAGE_LIST_LIMIT,
        }
      : {
          limit: MESSAGE_LIST_LIMIT,
        };
    this.sendPlToWS(wsActions.INIT_CHAT_GLOBAL_MESSAGES, payload);
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
  async handleWSMessage(action: Action<CheburSocketMessagePL>) {
    const { message } = action.payload;
    try {
      const { type, payload = null } = JSON.parse(message);

      switch (type) {
        case wsActions.SET_CHAT_MESSAGE:
          await this.processSetMessage(normalizeMessageSetPayload(payload));
          break;
        case wsActions.SET_CHAT_SESSION:
          await this.processSetSession(normalizeSetSessionPayload(payload));
          break;
        case wsActions.SET_CHAT_GLOBAL_MESSAGES:
          await this.processSetGlobalMessages(
            normalizeSetGlobalMessages(payload)
          );
      }
    } catch (e) {
      console.log('chat error: ', action);
    }
  }

  async processSetMessage(message: ChatMessage) {
    if (message.authorId !== null && !this.store.users[message.authorId]) {
      await this.loadUser(message.authorId);
    }

    if (!this.store.messages[message.messageId]) {
      // @ts-ignore
      this.store.messageIds.push(message.messageId);
    }
    this.store.messages[message.messageId] = message;

    this.emit(actionChatSetMessage(message));
  }

  loadUser = async userId => {
    if (!userId) {
      return;
    }

    const response = await Requester.get(API.profileItem(userId));
    if (response) {
      const user: UserShort | null = normalizeProfileGet(response);
      if (user) {
        this.store.users[userId] = user;
      }
    }
  };

  processSetSession = async mySessionId => {
    this.store.mySessionId = mySessionId;
    this.emit(actionChatSetSession({ sessionId: this.store.mySessionId }));
  };

  processSetGlobalMessages = async (messages: Array<ChatMessage>) => {
    const ids = messages.reverse().map(msg => {
      this.store.messages[msg.messageId] = msg;
      return msg.messageId;
    });

    this.store.messageIds = [...ids, ...this.store.messageIds];
    this.messagesListRequested = false;

    for (const msg of messages) {
      await this.loadUser(msg.authorId);
    }

    this.emit(
      actionChatSetGlobalMessages({
        messages: this.store.messageIds.map(id => this.store.messages[id]),
      })
    );
  };
}

export default new ChatStore();
