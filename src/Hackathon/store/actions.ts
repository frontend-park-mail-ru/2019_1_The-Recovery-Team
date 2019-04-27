import { ACreator, ACreatorNull } from 'store/types';
import { ChatMessage, ChatMessageData } from './types';

export enum chatActions {
  INITIALIZE = 'CHAT_INITIALIZE',
  CONNECTED = 'CHAT_CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  SET_MESSAGE = 'CHAT_SET_MESSAGE',
  INIT_MESSAGE = 'CHAT_INIT_MESSAGE',
}

export interface ChatInitMessagePL {
  data: ChatMessageData;
  toId: null | number;
}

export const actionChatInitialize: ACreatorNull = () => ({
  type: chatActions.INITIALIZE,
  payload: null,
});

export const actionChatConnected: ACreatorNull = () => ({
  type: chatActions.CONNECTED,
  payload: null,
});

export const actionChatDisconnected: ACreatorNull = () => ({
  type: chatActions.DISCONNECTED,
  payload: null,
});

export const actionChatSetMessage: ACreator<ChatMessage> = payload => ({
  payload,
  type: chatActions.SET_MESSAGE,
});

export const actionChatInitMessage: ACreator<ChatInitMessagePL> = payload => ({
  payload,
  type: chatActions.INIT_MESSAGE,
});
