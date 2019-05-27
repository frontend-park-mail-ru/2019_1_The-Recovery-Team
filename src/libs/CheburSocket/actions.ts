import { Action } from 'libs/Cheburstore';

export enum cheburSocketActions {
  CONNECTED = 'CHEBUR_SOCKET_CONNECTED',
  DISCONNECTED = 'CHEBUR_SOCKET_DISCONNECTED',
  MESSAGE = 'CHEBUR_SOCKET_MESSAGE',
}

export interface CheburSocketMessagePL {
  message: string;
}

export const actionCheburSocketConnected = (): Action<null> => ({
  type: cheburSocketActions.CONNECTED,
  payload: null,
});

export const actionCheburSocketDisonnected = (): Action<null> => ({
  type: cheburSocketActions.DISCONNECTED,
  payload: null,
});

export const actionCheburSocketMessage = (
  payload: CheburSocketMessagePL
): Action<CheburSocketMessagePL> => ({
  payload,
  type: cheburSocketActions.MESSAGE,
});
