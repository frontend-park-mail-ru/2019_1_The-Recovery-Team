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
    nickname = '',
    oauth = null,
    oauthId = null,
    position = 0,
    loss = 0,
    record = 0,
    win = 0,
  } = response.response;

  let { avatar = null } = response.response;

  if (!avatar || avatar!.length === '') {
    avatar = defaultAvatar;
  }

  return {
    id,
    email,
    nickname,
    oauth,
    oauthId,
    position,
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
