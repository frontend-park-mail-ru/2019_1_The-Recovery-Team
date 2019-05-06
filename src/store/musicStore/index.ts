import Cheburstore, { cheburhandler, cheburmodel } from 'libs/Cheburstore';
import { actionMusicChanged, musicActions } from './actions';

interface MusicState {
  isOn: boolean;
}

const initialState: MusicState = {
  isOn: true,
};

// @ts-ignore
@cheburmodel
class MusicStore extends Cheburstore<MusicState> {
  constructor() {
    super();
    this.store = initialState;
  }

  @cheburhandler(musicActions.ON)
  handleOn() {
    this.store = {
      isOn: true,
    };
    this.emit(actionMusicChanged({ isOn: true }));
  }

  @cheburhandler(musicActions.OFF)
  handleOff() {
    this.store = {
      isOn: false,
    };
    this.emit(actionMusicChanged({ isOn: false }));
  }
}

export * from './actions';

export default new MusicStore();
