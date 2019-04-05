import { Profile } from '../userStore';

export interface ScoreboardState {
  leaders: Array<Profile> | null;
  offset: number;
  total: number;
}
