import SimpleButton from 'components/SimpleButton/SimpleButton';
import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import { actionRouterPush } from 'libs/Cheburouter';
import routerStore from 'libs/Cheburouter/routerStore';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore, {
  actionUserEditAvatar,
  actionUserEditAvatarError,
  userActions,
} from 'store/userStore';
import UploadAvatar from '../../AuthPage/SignUpForm/UploadAvatar/UploadAvatar';
const styles = require('./EditAvatarForm.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class EditAvatarForm extends React.Component {
  state = {
    avatar: null,
  };

  handleSelectPhoto = avatar => this.setState({ avatar });

  @onCheburevent(userStore, userActions.EDIT_AVATAR_SUCCESS)
  handlerChangePage() {
    routerStore.emit(
      actionRouterPush({
        path: routeCreators.TO_PROFILE(),
      })
    );
  }

  updateAvatar = () => {
    const { avatar } = this.state;
    if (!avatar) {
      userStore.emit(actionUserEditAvatarError());
      return;
    }
    userStore.emit(actionUserEditAvatar({ avatar }));
  };

  render() {
    const { avatar } = this.state;
    const savedDisabled = !avatar;

    return (
      <div className={cn('edit-avatar-form')}>
        <UploadAvatar
          avatar={avatar}
          className={cn('edit-avatar-form__input')}
          onChange={this.handleSelectPhoto}
        />
        <SimpleButton disabled={savedDisabled} onClick={this.updateAvatar}>
          Сохранить
        </SimpleButton>
      </div>
    );
  }
}
