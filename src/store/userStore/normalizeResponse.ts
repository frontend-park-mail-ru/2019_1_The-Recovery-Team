import { defaultAvatar } from 'config/images';
import { Profile } from './types';

export const normalizeSessionGet = (response): number | null => {
  if (response.response && response.response.id) {
    return response.response.id;
  }

  return null;
};

export const normalizeProfileGet = (response): Profile | null => {
  if (response.error || !response.response) {
    return null;
  }

  const {
    id = null,
    email = null,
    nickname = null,
    loss = 0,
    record = 0,
    win = 0,
  } = response.response;

  let { avatar = null } = response.response;

  // TODO: Убрать, когда Арсений пофиксит
  if (
    id === null ||
    email === null ||
    nickname === null
    // loss === null ||
    // record === null ||
    // win === null
  ) {
    return null;
  }

  if (avatar === null || avatar.length === '') {
    avatar = defaultAvatar;
  }

  return {
    id,
    email,
    nickname,
    loss,
    record,
    win,
    avatar,
  };
};

export const normalizeAvatar = (response): string | null => {
  if (response.error || !response.response) {
    return null;
  }

  return response.response.avatar || null;
};
