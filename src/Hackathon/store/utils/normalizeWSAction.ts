import { ChatMessage } from '../types';

export const normalizeMessageSetPayload = (payload): ChatMessage =>
  payload as ChatMessage;

export const normalizeSetSessionPayload = (payload): string | null =>
  payload ? payload.sessionId || null : null;
