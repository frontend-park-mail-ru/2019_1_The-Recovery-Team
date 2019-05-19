import { GameModels } from 'game/config';

const keysMap = {
  ArrowRight: GameModels.Direction.RIGHT,
  ArrowLeft: GameModels.Direction.LEFT,
  ArrowUp: GameModels.Direction.UP,
  ArrowDown: GameModels.Direction.DOWN,
};

const itemsMap = {
  KeyS: GameModels.ItemType.SAND,
  KeyB: GameModels.ItemType.BOMB,
  Space: GameModels.ItemType.LIFEBUOY,
};

export const keyCodeToDir = (code): GameModels.Direction | null =>
  keysMap[code] || null;

export const keyCodeToItem = code => itemsMap[code] || null;
