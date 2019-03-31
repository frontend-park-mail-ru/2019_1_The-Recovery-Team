import { ACreator, ACreatorNull } from '../types';
import { Profile } from './types';

export enum userActionTypes {
  USER_CHECK_AUTH = 'USER_CHECK_AUTH',

  USER_LOGIN = 'USER_LOGIN',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_ERROR = 'USER_LOGIN_ERROR',

  USER_LOGOUT = 'USER_LOGOUT',
  USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR',

  USER_UPDATE = 'USER_UPDATE',
  USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
  USER_UPDATE_ERROR = 'USER_UPDATE_ERROR',

  USER_SIGNUP = 'USER_SIGNUP',
  USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS',
  USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR',
}

export interface UserLoginPL {
  email: string;
  password: string;
}

export interface UserLoginSuccessPL {
  profile: Profile;
}

export interface UserLoginErrorPL {
  errorMessage: string;
}

export interface UserSignupPL {
  email: string;
  password: string;
  nickname: string;
  avatar: ImageData | null;
}

export const actionUserCheckAuth: ACreatorNull = () => ({
  type: userActionTypes.USER_CHECK_AUTH,
  payload: null,
});

export const actionUserLogin: ACreator<UserLoginPL> = args => ({
  type: userActionTypes.USER_LOGIN,
  payload: args,
});

export const actionUserLoginSuccess: ACreator<UserLoginSuccessPL> = args => ({
  type: userActionTypes.USER_LOGIN_SUCCESS,
  payload: args,
});

export const actionUserLoginError: ACreator<UserLoginErrorPL> = args => ({
  type: userActionTypes.USER_LOGIN_ERROR,
  payload: args,
});

export const actionUserLogout: ACreatorNull = () => ({
  type: userActionTypes.USER_LOGOUT,
  payload: null,
});

export const actionUserLogoutSuccess: ACreatorNull = () => ({
  type: userActionTypes.USER_LOGOUT_SUCCESS,
  payload: null,
});

export const actionUserSignup: ACreator<UserSignupPL> = args => ({
  type: userActionTypes.USER_SIGNUP,
  payload: args,
});

export const actionUserSugnupSuccess: ACreator<UserLoginSuccessPL> = args => ({
  type: userActionTypes.USER_SIGNUP_SUCCESS,
  payload: args,
});

export const actionUserSignupError: ACreator<UserLoginErrorPL> = args => ({
  type: userActionTypes.USER_SIGNUP_ERROR,
  payload: args,
});
