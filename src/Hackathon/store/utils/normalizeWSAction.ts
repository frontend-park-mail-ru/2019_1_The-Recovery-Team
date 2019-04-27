import { ChatMessage } from '../types';

export const normalizeMessageSetPyload = (payload): ChatMessage =>
  payload as ChatMessage;
