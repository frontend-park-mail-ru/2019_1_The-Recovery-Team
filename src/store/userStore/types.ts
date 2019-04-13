export interface UserShort {
  id: number;
  nickname: string;
  avatar: string | null;
  record: number;
}

export interface Profile extends UserShort {
  email: string;
  loss: number;
  win: number;
}

export interface ProfileState {
  user: Profile | null;
}
