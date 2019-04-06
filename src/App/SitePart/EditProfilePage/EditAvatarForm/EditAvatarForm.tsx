import { modes } from 'components/buttons/SubmitButton';
import SubmitButton from 'components/buttons/SubmitButton';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./EditAvatarForm.modules.scss');

const cn = classNames(styles);

export default class EditAvatarForm extends React.Component {
  state = {
    avatar: null,
  };

  handleSelectPhoto = e =>
    this.setState({
      avatar: e.target.files[0] || null,
    });

  updateAvatar = () => {};

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
