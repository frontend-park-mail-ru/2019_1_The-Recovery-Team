import { RouteParams } from 'libs/Cheburouter/types';

export const routeNames = {
  BASE: 'BASE',
  RULES: 'RULES',
  ABOUT: 'ABOUT',
  SIGN: 'SIGN',
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  PROFILE: 'PROFILE',
  PROFILE_EDIT: 'PROFILE_EDIT',
  LEADER_BOARD: 'LEADER_BOARD',
};

export const routesMap = {
  BASE: {
    name: routeNames.BASE,
    template: '/',
  },
  RULES: {
    name: routeNames.RULES,
    template: '/rules',
  },
  ABOUT: {
    name: routeNames.ABOUT,
    template: '/about',
  },
  SIGN: {
    name: routeNames.SIGN,
    template: '/sign',
  },
  SIGN_IN: {
    name: routeNames.SIGN_IN,
    template: '/sign/in',
    exact: true,
  },
  SIGN_UP: {
    name: routeNames.SIGN_UP,
    template: '/sign/up',
    exact: true,
  },
  PROFILE: {
    name: routeNames.PROFILE,
    template: '/profile/{nickname}',
    safe: true,
    exact: true,
  },
  PROFILE_EDIT: {
    name: routeNames.PROFILE_EDIT,
    template: '/profile/{nickname}/edit',
    safe: true,
    exact: true,
  },
  LEADER_BOARD: {
    name: routeNames.LEADER_BOARD,
    template: '/leaderboard/{page}',
  },
};

export const routeCreators = {
  TO_START: () => '/',
  TO_RULES: () => '/rules',
  TO_ABOUT: () => '/about',
  TO_SIGN: () => '/sign',
  TO_SIGN_IN: () => '/sign/in',
  TO_SIGN_UP: () => '/sign/up',
  TO_PROFILE: (nickname: string) => `/nickname/${nickname}`,
  TO_PROFILE_EDIT: (nickname: string) => `/nickname/${nickname}/edit`,
  TO_LEADER_BOARD: (page: number) => `/leaderboard/${page}`,
};
