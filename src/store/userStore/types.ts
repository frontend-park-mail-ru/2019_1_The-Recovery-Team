export enum OAUTH_SERVICES {
  VK = 'vk',
}

export interface UserShort {
  id: number;
  nickname: string;
  avatar: string | null;
  record: number;
}

export interface Profile extends UserShort {
  email: string | null;
  oauth: OAUTH_SERVICES | null;
  oauthId: string | null;
  position: number;
  loss: number;
  win: number;
}

export interface ProfileState {
  user: Profile | null;
}
