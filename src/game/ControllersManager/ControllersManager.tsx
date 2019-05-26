import gameStore, {
  actionGameInitItemUse,
  actionInitPlayerMove,
} from 'game/store';
import { IControllersManager } from 'game/types';
import { GameModels } from '../config';
import { keyCodeToDir, keyCodeToItem } from './utils';

const LOOP_DURATION = 16;
const FRAME_COUNT = 8;

export default class ControllersManager implements IControllersManager {
  pressedKeys: Set<string> = new Set<string>();
  loopInterval: any = null;
  frameIndex: number = 0;

  moveRequest: GameModels.Direction | null = null;
  lastMoveIndex: number = 0;

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

  updateFrame = () => {
    this.frameIndex = (this.frameIndex + 1) % FRAME_COUNT;
    this.lastMoveIndex = Math.max(0, this.lastMoveIndex - 1);
  };

  emitAll = () => {
    this.updateFrame();

    this.pressedKeys.forEach(keyCode => {
      this.handleUseItem(keyCode);
      this.handleMovePlayer(keyCode);
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

  handleMovePlayer = keyCode => {
    const move = keyCodeToDir(keyCode);
    this.moveRequest = move || this.moveRequest;
    if (!this.moveRequest) {
      this.lastMoveIndex = FRAME_COUNT;
      return;
    }

    if (this.lastMoveIndex === 0) {
      this.emitMoveTo(this.moveRequest);
      this.lastMoveIndex = FRAME_COUNT;
      this.moveRequest = null;
    }
  };
}
