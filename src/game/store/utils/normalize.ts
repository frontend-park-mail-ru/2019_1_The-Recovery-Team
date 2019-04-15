import * as GameModels from 'game/config/models';

export const normalizeSetState = (
  payload: any
): GameModels.GameState => {
  // TODO: Валидация для бэкенда
  return payload as GameModels.GameState;
};
