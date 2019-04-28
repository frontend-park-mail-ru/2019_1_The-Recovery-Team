import * as GameModels from 'game/config/models';

export const normalizeSetState = (payload: any): GameModels.GameState => {
  return {
    activeItems: {},
    ...(payload as GameModels.GameState),
  };
};
