import gameStore, {
  actionGameInitItemUse,
  actionInitPlayerMove,
} from 'game/store';
import { IControllersManager } from 'game/types';
import { GameModels } from '../config';
import { keyCodeToDir, keyCodeToItem } from './utils';

const LOOP_DURATION = 16;
const FRAME_COUNT = 5;

export default class ControllersManager implements IControllersManager {
  pressedKeys: Set<string> = new Set<string>();
  loopInterval: any = null;

  moveRequest: GameModels.Direction | null = null;
  lastMoveIndex = 0;

  connect() {
    if (this.loopInterval) {
      clearInterval(this.loopInterval);
      this.loopInterval = null;
    }

    this.loopInterval = setInterval(this.emitAll, LOOP_DURATION);

    window.addEventListener('keydown', this.addKey);
    window.addEventListener('keyup', this.removeKey);
  }

  disconnect() {
    clearInterval(this.loopInterval);

    window.removeEventListener('keydown', this.addKey);
    window.removeEventListener('keyup', this.removeKey);
  }

  addKey = (e: KeyboardEvent) => this.pressedKeys.add(e.code);
  removeKey = (e: KeyboardEvent) => this.pressedKeys.delete(e.code);

  emitAll = () => {
    let curMoveRequest: GameModels.Direction | null = null;
    this.pressedKeys.forEach(keyCode => {
      const dir = keyCodeToDir(keyCode);
      if (dir) {
        curMoveRequest = dir;
      }
    });
    this.handleMovePlayer(curMoveRequest);

    this.pressedKeys.forEach(keyCode => {
      this.handleUseItem(keyCode);
    });
  };

  handleUseItem = keyCode => {
    const itemType = keyCodeToItem(keyCode);
    if (!itemType) {
      return;
    }
    gameStore.emit(
      actionGameInitItemUse({
        itemType,
        playerId: gameStore.selectMyId(),
      })
    );
  };

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

  handleMovePlayer = (curMoveRequest: GameModels.Direction | null) => {
    // Обновляем последнее нажатие
    if (this.moveRequest) {
    }

    if (this.lastMoveIndex === 0) {
      this.moveRequest = curMoveRequest || this.moveRequest;
      if (!this.moveRequest) {
        return;
      }

      const moveTo = this.moveRequest;
      this.moveRequest = null;
      this.emitMoveTo(moveTo);
      this.lastMoveIndex = FRAME_COUNT;
    } else {
      this.lastMoveIndex = Math.max(0, this.lastMoveIndex - 1);
    }
  };
}
