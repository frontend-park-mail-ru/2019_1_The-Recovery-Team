export const BASE_URL =
    window.location.hostname === '127.0.0.1'
    || window.location.hostname === 'localhost'
        ? 'http://127.0.0.1:8080' : '';

const prefixAPI = (url) => `${BASE_URL}/api/v1${url}`;

export default {
  avatars: () => prefixAPI('/avatars'),
  profiles: () => prefixAPI('/profiles'),
  profileItem: (id) => prefixAPI(`/profiles/${id}`),
  scores: () => prefixAPI(`/scores`),
  sessions: () => prefixAPI(`/sessions`),
};
