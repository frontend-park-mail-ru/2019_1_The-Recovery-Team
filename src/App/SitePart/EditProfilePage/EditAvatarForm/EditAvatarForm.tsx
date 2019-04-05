import SubmitButton, { modes } from 'components/buttons/SubmitButton';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore, {
  actionUserEditAvatar,
  actionUserEditAvatarError,
  userActions,
} from 'store/userStore';
import { CurPage } from '../../..';
const styles = require('./EditAvatarForm.modules.scss');

const cn = classNames(styles);

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
    this.props.onChangeMode(CurPage.PROFILE);
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
