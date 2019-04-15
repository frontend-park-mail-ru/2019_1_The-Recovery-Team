import { Profile } from 'store/userStore';

export const normalizeLeadersGet = (
  response
): {
  leaders: Array<Profile>;
  total: number;
} | null => {
  const leaders =
    response.response && Array.isArray(response.response.List)
      ? response.response.List
      : null;

  if (!leaders) {
    return null;
  }

  const total =
    response.response && !!response.response.total !== null
      ? response.response.total
      : null;
  if (!total) {
    return null;
  }

  return {
    leaders,
    total,
  };
};
