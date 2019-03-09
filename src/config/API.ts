const prefixAPI = (url) => `/api${url}`;

export default {
  avatars: () => prefixAPI('/avatars'),
  profiles: () => prefixAPI('/profiles'),
  profileItem: (id) => prefixAPI(`/profile/${id}`),
  scores: () => prefixAPI(`/scores`),
  sessions: () => prefixAPI(`/sessions`),
};
