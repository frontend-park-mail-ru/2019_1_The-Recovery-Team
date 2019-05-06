import * as React from 'libs/Cheburact/index';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import musicStore, { musicActions, MusicChangedPL } from 'store/musicStore';
const music = require('config/music/soundTrack.mp3');

// @ts-ignore
@connectToCheburstore
export default class Music extends React.Component {
  ref: HTMLAudioElement | null = null;

  updateSound(isOn) {
    if (!this.ref) {
      return;
    }

    this.ref.volume = isOn ? 1 : 0;
  }

  @onCheburevent(musicStore, musicActions.CHANGED)
  handleChangeSound({ payload }: Action<MusicChangedPL>) {
    this.updateSound(payload.isOn);
  }

  componentDidMount() {
    const { isOn } = musicStore.select();
    this.updateSound(isOn);
  }

  render() {
    return (
      <audio
        ref={r => (this.ref = r)}
        src={music}
        loop="false"
        autoplay="true"
        style="display:none"
      />
    );
  }
}
