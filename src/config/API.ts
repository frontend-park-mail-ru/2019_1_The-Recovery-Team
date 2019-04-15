export const BASE_URL = '';
// window.location.hostname === '127.0.0.1' ||
// window.location.hostname === 'localhost'
//   ? 'http://127.0.0.1:8080'
//   : '';

const prefixAPI = url => `${BASE_URL}/api/v1${url}`;

export const HTTP_STATUS = {
  badRequest: 400,
  conflict: 409,
  notFound: 404,
};

export const WS_URL: string = `ws://${window.location.host}/api/v1/game.ws`;

export default {
  avatars: () => prefixAPI('/avatars'),
  profiles: () => prefixAPI('/profiles'),
  profileItem: id => prefixAPI(`/profiles/${id}`),
  profilePassword: id => prefixAPI(`/profiles/${id}/password`),
  scores: () => prefixAPI(`/scores`),
  sessions: () => prefixAPI(`/sessions`),
};
