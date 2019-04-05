import { Profile } from '../userStore';

export const normalizeLeadersGet = (response): Array<Profile> | null => {
  if (response.response && Array.isArray(response.response.List)) {
    return response.response.List;
  }

  return null;
};

export const normalizeTotal = (response): number | null => {
  if (response.response && response.response.total) {
    return response.response.total;
  }

  return null;
};
