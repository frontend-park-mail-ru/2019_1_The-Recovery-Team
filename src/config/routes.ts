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
  GAME_PART: 'GAME_PART',
};

export const routesMap = {
  BASE: {
    name: routeNames.BASE,
    template: '/',
    title: 'SadIslands',
  },
  RULES: {
    name: routeNames.RULES,
    template: '/rules',
    title: 'Правила',
  },
  ABOUT: {
    name: routeNames.ABOUT,
    template: '/about',
    title: 'О нас',
  },
  SIGN_IN: {
    name: routeNames.SIGN_IN,
    template: '/sign/in',
    exact: true,
    title: 'Вход',
  },
  SIGN_UP: {
    name: routeNames.SIGN_UP,
    template: '/sign/up',
    exact: true,
    title: 'Регистрация',
  },
  SIGN: {
    name: routeNames.SIGN,
    template: '/sign',
  },
  PROFILE: {
    name: routeNames.PROFILE,
    template: '/profile',
    safe: true,
    exact: true,
    title: 'Профиль',
  },
  PROFILE_EDIT: {
    name: routeNames.PROFILE_EDIT,
    template: '/profile/edit',
    safe: true,
    exact: true,
    title: 'Редактирование профиля',
  },
  LEADER_BOARD: {
    name: routeNames.LEADER_BOARD,
    template: '/leaderboard',
    title: 'Лидеры',
  },
  GAME_PART: {
    name: routeNames.GAME_PART,
    template: '/game',
    title: 'Игра',
  },
};

export const routeCreators = {
  TO_START: () => '/',
  TO_RULES: () => '/rules',
  TO_ABOUT: () => '/about',
  TO_SIGN_IN: () => '/sign/in',
  TO_SIGN_UP: () => '/sign/up',
  TO_PROFILE: () => `/profile`,
  TO_PROFILE_EDIT: () => `/profile/edit`,
  TO_LEADER_BOARD: () => `/leaderboard`,
  TO_GAME_PART: () => `/game`,
};
