import { routeCreators } from 'config/routes';

export const buttonsConfig = [
  { type: 'reload', to: routeCreators.TO_GAME_PART() },
  { type: 'play', to: routeCreators.TO_GAME_PART() },
  { type: 'give-up', to: routeCreators.TO_FINISH_PAGE() },
];
