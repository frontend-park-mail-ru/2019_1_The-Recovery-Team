import { UserShort } from 'store/userStore';

export interface ChatMessageData {
  text: string;
}

export interface ChatMessage {
  messageId: number;
  authorId: number;
  toId: null | number;
  created: string;
  isEdited: boolean;
  data: ChatMessageData;
}

export interface ChatState {
  messageIds: Array<number>;
  messages: {
    [messageId: number]: ChatMessage;
  };
  users: {
    [userId: number]: UserShort;
  };
}
