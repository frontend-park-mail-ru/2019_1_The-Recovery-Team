import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import {modes} from 'components/buttons/SubmitButton';
import SubmitButton from 'components/buttons/SubmitButton';
import Requester from 'libs/Requester';
import API from 'config/API';
import {CurPage} from '../../..';
const styles = require('./EditAvatarForm.modules.scss');

const cn = classNames(styles);

export default class EditAvatarForm extends React.Component {

  state = {
    avatar: null,
  };

  handleSelectPhoto = (e) =>
      this.setState({
        avatar: e.target.files[0] || null,
      });


  updateAvatar = () => {
    const { avatar } = this.state;
    console.log(avatar);

    Requester.put(API.avatars(), {
      avatar,
    }, true).then(({response, error}) => {
      if (response) {
        this.props.onAuthorized({...this.props.user, avatar: response.avatar});
        this.props.onChangeMode(CurPage.PROFILE);
      }
    });
  };

  render() {

    const savedDisabled = !this.state.avatar;

    return (
        <div className={cn('edit-avatar-form')}>
          <input type='file' accept='image/*' onChange={this.handleSelectPhoto} />
          <div className={cn('edit-avatar-form__button')}>
            <SubmitButton
                disabled={savedDisabled}
                onClick={this.updateAvatar}
                mode={modes.SAVE}
            >{'Сохранить'}</SubmitButton>
          </div>
        </div>
    );
  }
}