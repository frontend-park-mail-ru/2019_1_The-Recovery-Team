import { Action } from 'libs/Cheburstore';

export enum routerActions {
  PUSH = 'ROUTER_PUSH',
  PUSH_OK = 'ROUTER_PUSH_OK',
  SET_SAFE = 'ROUTER_SET_SAFE',
  SET_UNSAFE = 'ROUTER_SET_UNSAFE',
  BACK = 'ROUTER_BACK',
  FORWARD = 'ROUTER_FORWARD',
}

export interface RouterPathPL {
  path: string;
}

export const actionRouterPush = (args: RouterPathPL): Action<RouterPathPL> => ({
  type: routerActions.PUSH,
  payload: args,
});

export const actionRouterPushOk = (
  args: RouterPathPL
): Action<RouterPathPL> => ({
  type: routerActions.PUSH_OK,
  payload: args,
});

export const actionRouterSetSafe = (): Action<null> => ({
  type: routerActions.SET_SAFE,
  payload: null,
});

export const actionRouterSetUnsafe = (): Action<null> => ({
  type: routerActions.SET_UNSAFE,
  payload: null,
});

export const actionRouterBack = (): Action<null> => ({
  type: routerActions.BACK,
  payload: null,
});

export const actionRouterForward = (): Action<null> => ({
  type: routerActions.FORWARD,
  payload: null,
});
