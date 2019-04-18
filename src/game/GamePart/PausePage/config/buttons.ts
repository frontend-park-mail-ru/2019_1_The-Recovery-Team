import { routeCreators } from 'config/routes';
export const reloadImg = require('components/buttons/GameButton/img/Reload.svg');
export const playImg = require('components/buttons/GameButton/img/Play.svg');
export const giveUpImg = require('components/buttons/GameButton/img/GiveUp.svg');

export const buttonsConfig = [
  { type: 'reload', img: reloadImg, to: routeCreators.TO_GAME_PART() },
  { type: 'play', img: playImg, to: routeCreators.TO_GAME_PART() },
  { type: 'give-up', img: giveUpImg, to: routeCreators.TO_FINISH_PAGE() },
];
