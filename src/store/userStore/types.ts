export interface Profile {
  id: number;
  email: string;
  nickname: string;
  loss: number;
  record: number;
  win: number;
  avatar: string | null;
}

export interface ProfileState {
  user: Profile | null;
}
