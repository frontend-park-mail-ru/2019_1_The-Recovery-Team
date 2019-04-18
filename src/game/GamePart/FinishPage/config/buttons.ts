import {routeCreators} from 'config/routes';
export const reloadImg = require('components/buttons/GameButton/img/Reload.svg');
export const profileImg = require('components/buttons/GameButton/img/Profile.svg');
export const homeImg = require('components/buttons/GameButton/img/Home.svg');

export const buttons = [
  { type: 'reload', img: reloadImg, to: routeCreators.TO_GAME_PART() },
  { type: 'profile', img: profileImg, to: routeCreators.TO_PROFILE() },
  { type: 'home', img: homeImg, to: routeCreators.TO_START() },
];
