import { ACreator, ACreatorNull } from 'store/types';
import { ChatMessage, ChatMessageData } from './types';

export enum chatActions {
  INITIALIZE = 'CHAT_INITIALIZE',
  CONNECTED = 'CHAT_CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  SET_MESSAGE = 'CHAT_SET_MESSAGE',
  INIT_MESSAGE = 'CHAT_INIT_MESSAGE',
  SET_SESSION = 'CHAT_SET_SESSION',
  SET_GLOBAL_MESSAGES = 'CHAT_SET_GLOBAL_MESSAGES',
  INIT_GLOBAL_MESSAGES = 'CHAT_INIT_GLOBAL_MESSAGES',
}

export interface ChatInitMessagePL {
  data: ChatMessageData;
  toId: null | number;
}

export interface ChatSetSessionPL {
  sessionId: string | null;
}

export interface ChatSetGlobalMessagesPL {
  messages: Array<ChatMessage>;
}

// export interface ChatInitGlobalMessagesPL {
//   start?: number;
//   limit?: number;
// }

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

export const actionChatSetSession: ACreator<ChatSetSessionPL> = payload => ({
  payload,
  type: chatActions.SET_SESSION,
});

export const actionChatSetGlobalMessages: ACreator<
  ChatSetGlobalMessagesPL
> = payload => ({
  payload,
  type: chatActions.SET_GLOBAL_MESSAGES,
});

export const actionChatInitGlobalMessages: ACreatorNull = () => ({
  payload: null,
  type: chatActions.INIT_GLOBAL_MESSAGES,
});
