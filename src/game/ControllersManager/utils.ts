import { GameModels } from 'game/config';

const keysMap = {
  ArrowRight: GameModels.Direction.RIGHT,
  ArrowLeft: GameModels.Direction.LEFT,
  ArrowUp: GameModels.Direction.UP,
  ArrowDown: GameModels.Direction.DOWN,
};

export const keyCodeToDir = e => keysMap[e.code] || null;
