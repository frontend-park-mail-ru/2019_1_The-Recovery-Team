import SubmitButton, { modes } from 'components/buttons/SubmitButton';
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
const styles = require('./EditAvatarForm.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class EditAvatarForm extends React.Component {
  state = {
    avatar: null,
  };

  handleSelectPhoto = e =>
    this.setState({
      avatar: e.target.files[0] || null,
    });

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
    const savedDisabled = !this.state.avatar;

    return (
      <div className={cn('edit-avatar-form')}>
        <input type="file" accept="image/*" onChange={this.handleSelectPhoto} />
        <div className={cn('edit-avatar-form__button')}>
          <SubmitButton
            disabled={savedDisabled}
            onClick={this.updateAvatar}
            mode={modes.SAVE}
          >
            {'Сохранить'}
          </SubmitButton>
        </div>
      </div>
    );
  }
}
