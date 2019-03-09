const prefixAPI = (url) => `/api${url}`;

export default {
  avatars: () => prefixAPI('/avatars'),
  profiles: () => prefixAPI('/profiles'),
  profileItem: (id) => prefixAPI(`/profiles/${id}`),
  scores: () => prefixAPI(`/scores`),
  sessions: () => prefixAPI(`/sessions`),
};
