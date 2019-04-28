import gameStore, {
  actionGameInitItemUse,
  actionInitPlayerMove,
} from 'game/store';
import { IControllersManager } from 'game/types';
import { keyCodeToDir, keyCodeToItem } from './utils';

export default class ControllersManager implements IControllersManager {
  connect() {
    window.addEventListener('keydown', this.handleUseItem);
    window.addEventListener('keydown', this.handleMovePlayer);
  }

  disconnect() {
    window.removeEventListener('keydown', this.handleUseItem);
    window.removeEventListener('keydown', this.handleMovePlayer);
  }

  handleUseItem = e =>
    requestAnimationFrame(() => {
      const itemType = keyCodeToItem(e);
      if (!itemType) {
        return;
      }
      gameStore.emit(
        actionGameInitItemUse({
          itemType,
          playerId: gameStore.selectMyId(),
        })
      );
    });

  handleMovePlayer = e =>
    requestAnimationFrame(() => {
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
