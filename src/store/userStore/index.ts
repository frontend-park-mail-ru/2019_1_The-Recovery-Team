import API from 'config/API';
import Cheburstore, {
  Action,
  cheburhandler,
  cheburmodel,
} from 'libs/Cheburstore';
import Requester from 'libs/Requester';
import {
  actionUserEditAvatarError,
  actionUserEditAvatarSuccess,
  actionUserEditError,
  actionUserEditPasswordError,
  actionUserLoginError,
  actionUserLogoutSuccess,
  actionUserSignupError,
  actionUserUpdateSuccess,
  userActions,
  UserEditAvatarPL,
  UserEditPasswordPL,
  UserEditPL,
  UserLoginPL,
  UserSignupPL,
} from './actions';
import {
  normalizeAvatar,
  normalizeProfileGet,
  normalizeSessionGet,
} from './normalizeResponse';
import { ProfileState } from './types';

@cheburmodel
class UserStore extends Cheburstore<ProfileState> {
  constructor() {
    super();
    this.store = {
      user: null,
    };
  }

  @cheburhandler(userActions.LOGOUT)
  async logout() {
    // TODO error process
    const { response } = await Requester.delete(API.sessions());

    if (response) {
      this.emit(actionUserLogoutSuccess());
      return;
    }
  }

  @cheburhandler(userActions.CHECK_AUTH)
  async authorize() {
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
    this.emit(actionUserUpdateSuccess({ profile }));
  }

  @cheburhandler(userActions.LOGIN)
  async login(action: Action<UserLoginPL>) {
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
      actionUserUpdateSuccess({
        profile,
      })
    );
  }

  @cheburhandler(userActions.SIGNUP)
  async signup(action: Action<UserSignupPL>) {
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
      actionUserUpdateSuccess({
        profile,
      })
    );
  }

  @cheburhandler(userActions.EDIT)
  async edit(action: Action<UserEditPL>) {
    const { user } = this.store;
    const { payload } = action;

    if (!user) {
      this.emit(actionUserEditError());
      return;
    }

    const { response } = await Requester.put(API.profileItem(user.id), payload);

    if (!response) {
      this.emit(actionUserEditError());
      return;
    }

    this.store.user = {
      ...user,
      nickname: payload.nickname,
      email: payload.email,
    };
    this.emit(
      actionUserUpdateSuccess({
        profile: this.store.user,
      })
    );
  }

  @cheburhandler(userActions.EDIT_PASSWORD)
  async editPassword(action: Action<UserEditPasswordPL>) {
    const { user } = this.store;
    const { payload } = action;

    if (!user) {
      return;
    }

    const { error } = await Requester.put(API.profilePassword(user.id), {
      password: payload.password,
      password_old: payload.passwordOld,
    });

    if (error !== null) {
      this.emit(
        actionUserEditPasswordError({
          errorMessage: 'Неверный пароль',
        })
      );
    } else {
      this.emit(
        actionUserUpdateSuccess({
          profile: user,
        })
      );
    }
  }

  @cheburhandler(userActions.EDIT_AVATAR)
  async editAvatar(action: Action<UserEditAvatarPL>) {
    const { payload } = action;
    const { user } = this.store;

    if (!user) {
      this.emit(actionUserEditAvatarError());
      return;
    }

    const avatarResp = await Requester.put(
      API.avatars(),
      { avatar: payload.avatar },
      true
    );
    const avatar = normalizeAvatar(avatarResp);

    if (!avatar) {
      this.emit(actionUserEditAvatarError());
      return;
    }

    this.store.user = {
      ...user,
      avatar,
    };

    this.emit(
      actionUserUpdateSuccess({
        profile: this.store.user,
      })
    ).emit(actionUserEditAvatarSuccess());
  }
}

export * from './types';
export * from './actions';

export default new UserStore();
