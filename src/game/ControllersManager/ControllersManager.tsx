import gameStore, { actionInitPlayerMove } from 'game/store';
import { IControllersManager } from 'game/types';
import { keyCodeToDir } from './utils';

export default class ControllersManager implements IControllersManager {
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
          playerId: gameStore.selectMyId(),
          move: direction,
        })
      );
    });
}
