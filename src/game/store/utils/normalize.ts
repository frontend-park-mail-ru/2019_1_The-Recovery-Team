import * as GameModels from 'game/config/models';

export const normalizeSetState = (payload: any): GameModels.GameState => {
  // TODO: Валидация для бэкенда
  return {
    activeItems: {
      [GameModels.ItemType.LIFEBUOY]: 0,
      [GameModels.ItemType.BOMB]: 0,
      [GameModels.ItemType.SAND]: 0,
    },
    ...(payload as GameModels.GameState),
  };
};
