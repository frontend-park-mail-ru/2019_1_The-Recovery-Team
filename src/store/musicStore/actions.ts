import { ACreator, ACreatorNull } from 'store/types';

export enum musicActions {
  ON = 'MUSIC_ON',
  OFF = 'MUSIC_OFF',
  CHANGED = 'MUSIC_CHANGED',
}

export interface MusicChangedPL {
  isOn: boolean;
}

export const actionMusicOn: ACreatorNull = () => ({
  payload: null,
  type: musicActions.ON,
});

export const actionMusicOff: ACreatorNull = () => ({
  payload: null,
  type: musicActions.OFF,
});

export const actionMusicChanged: ACreator<MusicChangedPL> = payload => ({
  payload,
  type: musicActions.CHANGED,
});
