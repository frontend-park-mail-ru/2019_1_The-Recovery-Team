import { ACreator, ACreatorNull } from '../types';
import { Profile } from './types';

export enum userActions {
  CHECK_AUTH = 'USER_CHECK_AUTH',
  CHECK_AUTH_RESULT = 'USER_CHECK_AUTH_RESULT',

  UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',

  LOGIN = 'USER_LOGIN',
  LOGIN_ERROR = 'USER_LOGIN_ERROR',

  LOGOUT = 'USER_LOGOUT',
  LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS',

  SIGNUP = 'USER_SIGNUP',
  SIGNUP_ERROR = 'USER_SIGNUP_ERROR',

  EDIT = 'USER_EDIT',
  EDIT_ERROR = 'USER_EDIT_ERROR',

  EDIT_PASSWORD = 'USER_EDIT_PASSWORD',
  EDIT_PASSWORD_ERROR = 'EDIT_PASSWORD_ERROR',

  EDIT_AVATAR = 'USER_EDIT_AVATAR',
  EDIT_AVATAR_ERROR = 'USER_EDIT_AVATAR_ERROR',
  EDIT_AVATAR_SUCCESS = 'USER_EDIT_AVATAR_SUCCESS',
}

export interface UserLoginPL {
  email: string;
  password: string;
}

export interface UserUpdateSuccessPL {
  profile: Profile;
}

export interface UserCheckAuthResultPL {
  profile: Profile | null;
}

export interface UserErrorPL {
  errorMessage: string;
}

export interface UserSignupPL {
  email: string;
  password: string;
  nickname: string;
  avatar: ImageData | null;
}

export interface UserEditPL {
  email: string;
  nickname: string;
}

export interface UserEditPasswordPL {
  password: string;
  passwordOld: string;
}

export interface UserEditAvatarPL {
  avatar: ImageData;
}

export const actionUserCheckAuth: ACreatorNull = () => ({
  type: userActions.CHECK_AUTH,
  payload: null,
});

export const actionUserLogin: ACreator<UserLoginPL> = payload => ({
  payload,
  type: userActions.LOGIN,
});

export const actionUserUpdateSuccess: ACreator<
  UserUpdateSuccessPL
> = payload => ({
  payload,
  type: userActions.UPDATE_SUCCESS,
});

export const actionUserLoginError: ACreator<UserErrorPL> = payload => ({
  payload,
  type: userActions.LOGIN_ERROR,
});

export const actionUserLogout: ACreatorNull = () => ({
  type: userActions.LOGOUT,
  payload: null,
});

export const actionUserLogoutSuccess: ACreatorNull = () => ({
  type: userActions.LOGOUT_SUCCESS,
  payload: null,
});

export const actionUserSignup: ACreator<UserSignupPL> = payload => ({
  payload,
  type: userActions.SIGNUP,
});

export const actionUserSignupError: ACreator<UserErrorPL> = payload => ({
  payload,
  type: userActions.SIGNUP_ERROR,
});

export const actionUserEdit: ACreator<UserEditPL> = payload => ({
  payload,
  type: userActions.EDIT,
});

export const actionUserEditError: ACreatorNull = () => ({
  type: userActions.EDIT_ERROR,
  payload: null,
});

export const actionUserEditPassword: ACreator<
  UserEditPasswordPL
> = payload => ({
  payload,
  type: userActions.EDIT_PASSWORD,
});

export const actionUserEditPasswordError: ACreator<UserErrorPL> = payload => ({
  payload,
  type: userActions.EDIT_PASSWORD_ERROR,
});

export const actionUserEditAvatar: ACreator<UserEditAvatarPL> = payload => ({
  payload,
  type: userActions.EDIT_AVATAR,
});

export const actionUserEditAvatarError: ACreatorNull = () => ({
  payload: null,
  type: userActions.EDIT_AVATAR_ERROR,
});

export const actionUserEditAvatarSuccess: ACreatorNull = () => ({
  payload: null,
  type: userActions.EDIT_AVATAR_SUCCESS,
});
