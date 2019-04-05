import { ACreator, ACreatorNull } from '../types';
import { Profile } from '../userStore';

export enum scoreboardActions {
  LOAD_LEADERS = 'BOARD_LOAD_LEADERS',
  LOAD_LEADERS_SUCCESS = 'BOARD_LOAD_LEADERS_SUCCESS',
  LOAD_LEADERS_ERROR = 'BOARD_LOAD_LEADERS_ERROR',

  UPDATE_LEADERS = 'BOARD_UPDATE_LEADERS',
}

export interface LoadScoreboardPL {
  offset: number;
  limit: number;
}

export interface UpdateLeadersPL {
  leaders: Array<Profile>;
  total: number;
}

export const actionScoreboardLoadPage: ACreator<
  LoadScoreboardPL
> = payload => ({
  payload,
  type: scoreboardActions.LOAD_LEADERS,
});

export const actionScoreboardLoadPageError: ACreatorNull = () => ({
  payload: null,
  type: scoreboardActions.LOAD_LEADERS_ERROR,
});

export const actionUpdateLeaders: ACreator<UpdateLeadersPL> = payload => ({
  payload,
  type: scoreboardActions.UPDATE_LEADERS,
});
