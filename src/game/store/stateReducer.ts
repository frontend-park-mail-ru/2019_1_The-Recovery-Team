import { GameModels } from 'game/config';
import { gameTransportActions } from 'game/transport/actions';
import { Action } from 'libs/Cheburstore';
import applyDiff from './utils/applyDiff';
import { normalizeSetState } from './utils/normalize';

interface ReducersMap {
  [actionType: string]: (
    state: GameModels.GameState,
    payload: any
  ) => GameModels.GameState;
}

const reducersMap: ReducersMap = {
  [gameTransportActions.SET_STATE]: (state, payload) =>
    normalizeSetState(payload),

  [gameTransportActions.SET_STATE_DIFF]: (state, payload) =>
    applyDiff(state, payload),
};

export default (
  state: GameModels.GameState,
  action: Action<any>
): GameModels.GameState => {
  const reducer = reducersMap[action.type];
  if (!reducer) {
    return state;
  }

  return reducer(state, action.payload);
};
