import gameStore, { actionInitPlayerMove } from 'game/store';
import { keyCodeToDir } from './utils';

export default class ControllersManager {
  myId = null;

  constructor(myId) {
    this.myId = myId;
  }

  connect() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  disconnect() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e =>
    requestAnimationFrame(() => {
      const direction = keyCodeToDir(e);
      if (!direction) {
        return;
      }

      gameStore.emit(
        actionInitPlayerMove({
          playerId: Number.parseInt(this.myId || '0', 10),
          move: direction,
        })
      );
    });
}
