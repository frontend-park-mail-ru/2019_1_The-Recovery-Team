import API from 'config/API';
import Cheburstore, { Action } from 'libs/Cheburstore';
import Requester from 'libs/Requester';
import {
  actionUserLoginError,
  actionUserLoginSuccess,
  actionUserLogoutSuccess,
  actionUserSignup,
  actionUserSignupError,
  userActionTypes,
  UserLoginPL,
  UserSignupPL,
} from './actions';
import { normalizeProfileGet, normalizeSessionGet } from './normalizeResponse';
import { ProfileState } from './types';

class UserStore extends Cheburstore<ProfileState> {
  constructor() {
    super();
    this.store = {
      user: null,
    };

    this.on(userActionTypes.USER_CHECK_AUTH, this.authorize)
      .on(userActionTypes.USER_LOGOUT, this.logout)
      .on(userActionTypes.USER_LOGIN, this.login)
      .on(userActionTypes.USER_SIGNUP, this.signup);
  }

  private logout = async () => {
    // TODO error process
    const { response } = await Requester.delete(API.sessions());

    if (response) {
      this.emit(actionUserLogoutSuccess());
      return;
    }
  };

  private authorize = async () => {
    const sessionResp = await Requester.get(API.sessions());
    const id = normalizeSessionGet(sessionResp);
    if (id === null) {
      this.store.user = null;
      this.emit(actionUserLogoutSuccess());
      return;
    }

    const userResp = await Requester.get(API.profileItem(id || ''));
    const profile = normalizeProfileGet(userResp);
    if (profile === null) {
      this.store.user = null;
      this.emit(actionUserLogoutSuccess());
      return;
    }

    this.store.user = profile;
    this.emit(actionUserLoginSuccess({ profile }));
  };

  private login = async (action: Action<UserLoginPL>) => {
    const loginResp = await Requester.post(API.sessions(), action.payload);
    const profile = normalizeProfileGet(loginResp);
    if (profile === null) {
      // TODO: более детальная обработка ошибок
      this.store.user = null;
      this.emit(
        actionUserLoginError({
          errorMessage: 'Неправильный email или пароль',
        })
      );
      return;
    }

    this.store.user = profile;
    this.emit(
      actionUserLoginSuccess({
        profile,
      })
    );
  };

  private signup = async (action: Action<UserSignupPL>) => {
    const signupResp = await Requester.post(
      API.profiles(),
      action.payload,
      true
    );

    const profile = normalizeProfileGet(signupResp);
    if (profile === null) {
      // TODO: более детальная обработка ошибок
      this.store.user = null;
      this.emit(
        actionUserSignupError({
          errorMessage: 'Неправильный email или пароль',
        })
      );
      return;
    }

    this.store.user = profile;
    this.emit(
      actionUserLoginSuccess({
        profile,
      })
    );
  };
}

export * from './types';
export * from './actions';

export default new UserStore();
