import isProd from 'config/isProd';

export const BASE_URL = '';

const prefixAPI = url => `${BASE_URL}/api/v1${url}`;

export const HTTP_STATUS = {
  badRequest: 400,
  conflict: 409,
  notFound: 404,
};

export const WS_URL: string = `${isProd ? 'wss' : 'ws'}://${
  window.location.host
}/api/v1/game.ws`;

export default {
  avatars: () => prefixAPI('/avatars'),
  profiles: () => prefixAPI('/profiles'),
  profileItem: id => prefixAPI(`/profiles/${id}`),
  profilePassword: id => prefixAPI(`/profiles/${id}/password`),
  scores: () => prefixAPI(`/scores`),
  sessions: () => prefixAPI(`/sessions`),
};
