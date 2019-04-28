import gameStore, {
  actionGameInitItemUse,
  actionInitPlayerMove,
} from 'game/store';
import { IControllersManager } from 'game/types';
import { keyCodeToDir, keyCodeToItem } from './utils';

export default class ControllersManager implements IControllersManager {
  connect() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  disconnect() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e =>
    requestAnimationFrame(() => {
      const itemType = keyCodeToItem(e);
      if (itemType) {
        gameStore.emit(
          actionGameInitItemUse({
            itemType,
            playerId: gameStore.selectMyId(),
          })
        );
        return;
      }

      const move = keyCodeToDir(e);
      if (!move) {
        return;
      }

      gameStore.emit(
        actionInitPlayerMove({
          move,
          playerId: gameStore.selectMyId(),
        })
      );
    });
}
