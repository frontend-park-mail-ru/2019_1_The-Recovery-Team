import { UserShort } from 'store/userStore';

export interface ChatMessageData {
  text: string;
}

export interface ChatMessage {
  messageId: number;
  authorId: null | number;
  toId: null | number;
  created: string;
  isEdited: boolean;
  sessionId: string;
  data: ChatMessageData;
}

export interface ChatState {
  messageIds: Array<number>;
  mySessionId: string | null;
  messages: {
    [messageId: number]: ChatMessage;
  };
  users: {
    [userId: number]: UserShort;
  };
}
