import { ACreator, ACreatorNull } from 'store/types';
import { Leader } from './types';

export enum scoreboardActions {
  LOAD = 'BOARD_LOAD_LEADERS',
  LOAD_SUCCESS = 'BOARD_LOAD_SUCCESS',
  LOAD_ERROR = 'BOARD_LOAD_LEADERS_ERROR',

  RESET = 'BOARS_RESET',
}

export interface UpdateLeadersPL {
  leaders: Array<Leader>;
  hasMore: boolean;
}

export const actionScoreboardLoad: ACreatorNull = () => ({
  payload: null,
  type: scoreboardActions.LOAD,
});

export const actionScoreboardLoadSuccess: ACreator<
  UpdateLeadersPL
> = payload => ({
  payload,
  type: scoreboardActions.LOAD_SUCCESS,
});

export const actionScoreboardReset: ACreatorNull = () => ({
  payload: null,
  type: scoreboardActions.RESET,
});

export const actionScoreboardLoadPageError: ACreatorNull = () => ({
  payload: null,
  type: scoreboardActions.LOAD_ERROR,
});
