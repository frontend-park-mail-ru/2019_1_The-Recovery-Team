import { GameModels } from 'game/config';

const ACTIVE_ITEMS_KEY = 'activeItems';
const PLAYERS_KEY = 'players';
const FIELD_KEY = 'field';
const CELLS_KEY = 'cells';
const ROUND_NUMBER_KEY = 'roundNumber';
const ROUND_TIMER_KEY = 'roundTimer';

const applyDiff = (
  state: GameModels.GameState,
  diff: Object
): GameModels.GameState => {
  const nextState = { ...state };

  // TODO: Валидация для бэкенда
  if (diff[PLAYERS_KEY]) {
    nextState.players = { ...nextState.players, ...diff[PLAYERS_KEY] };
  }

  if (diff[ROUND_NUMBER_KEY]) {
    nextState.roundNumber = diff[ROUND_NUMBER_KEY];
  }

  if (diff[ROUND_TIMER_KEY] || diff[ROUND_TIMER_KEY] === 0) {
    nextState.roundTimer = diff[ROUND_TIMER_KEY];
  }

  if (diff[FIELD_KEY]) {
    const cells = diff[FIELD_KEY][CELLS_KEY];
    if (Array.isArray(cells)) {
      const { width } = state.field;

      cells.forEach((cell: GameModels.Cell) => {
        const pos = cell.row * width + cell.col;
        state.field.cells[pos] = cell;
      });
    }
  }

  if (diff[ACTIVE_ITEMS_KEY]) {
    nextState.activeItems = diff[ACTIVE_ITEMS_KEY];
  }

  return nextState;
};

export default applyDiff;
