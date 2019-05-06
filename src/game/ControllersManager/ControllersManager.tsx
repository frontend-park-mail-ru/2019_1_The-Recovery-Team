import gameStore, {
  actionGameInitItemUse,
  actionInitPlayerMove,
} from 'game/store';
import { IControllersManager } from 'game/types';
import { GameModels } from '../config';
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

  emitMoveTo = (dir: GameModels.Direction) =>
    gameStore.emit(
      actionInitPlayerMove({
        move: dir,
        playerId: gameStore.selectMyId(),
      })
    );

  emitUp = () => this.emitMoveTo(GameModels.Direction.UP);

  emitLeft = () => this.emitMoveTo(GameModels.Direction.LEFT);

  emitDown = () => this.emitMoveTo(GameModels.Direction.DOWN);

  emitRight = () => this.emitMoveTo(GameModels.Direction.RIGHT);

  handleMovePlayer = e =>
    requestAnimationFrame(() => {
      const move = keyCodeToDir(e);
      if (!move) {
        return;
      }

      this.emitMoveTo(move);
    });
}
