import API from 'config/API';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Requester from 'libs/Requester';
import ModalWindow from 'components/ModalWindow';
import AvatarProfile from 'components/AvatarProfile';
import EditButton from 'components/buttons/EditButton';
import Form, { InputConfig } from 'components/Form';
import SubmitButton, {modes} from 'components/buttons/SubmitButton';
import { CurPage } from '../..';
import EditPasswordForm from './EditPasswordForm';
import EditAvatarForm from './EditAvatarForm';
const styles = require('./EditProfilePage.modules.scss');

const cn = classNames(styles);

interface State {
  email: InputConfig;
  nickname: InputConfig;
  isShownModalPassword: boolean;
  isShownModalAvatar: boolean;
}

export default class EditProfilePage extends React.Component {
  state : State = {
    email: {
      placeholder: 'Email',
      isError: false,
      value: this.props.user.email,
      name: 'email',
      touched: false,
      label: 'Email',
      type: 'email'
    },
    nickname: {
      placeholder: 'Никнейм',
      isError: false,
      value: this.props.user.nickname,
      name: 'nickname',
      touched: false,
      label: 'Никнейм',
      type: 'text',
    },
    isShownModalPassword: false,
    isShownModalAvatar: false,
  };

  changeValueField(name: string, value, field: InputConfig) {
    this.setState({
      [name]: {
        ...field,
        placeholder: value.length ? field.label : field.placeholder,
        isError: value.length ? false : field.isError,
        value,
        touched: true,
      }
    });
  }

  handleChangeValue = (name: string, value: string) => {
    const field: InputConfig = this.state[name];

    if ((name === 'email' || name === 'nickname') && value !== this.props.user[name]) {
      Requester.get(API.profiles(), {
        [name]: value
      }).then(({response, error}) => {
        if (!error) {
          this.setState({
            [name]: {
              ...field,
              placeholder: `Такой ${field.label} уже существует`,
              isError: true,
              value,
              touched: true
            }
          });
        } else {
          this.changeValueField(name, value, field);
        }
      });
    } else {
      this.changeValueField(name, value, field);
    }
  };

  handleBlur = (name: string) => {
    const field: InputConfig = this.state[name];
    if (field.value.length === 0 && field.touched ) {
      this.setState({
        [name]: {
          ...field,
          placeholder: `${field.label} - обязательное поле`,
          isError: true,
        }
      });
    }
  };

  updateUser = () => {
    const {email, nickname} = this.state;
    const { user } = this.props;

    let data = {};
    if (email.value !== user.email && nickname.value !== user.nickname) {
      data = {
        email: email.value,
        nickname: nickname.value,
      };
    } else if (email.value !== user.email) {
      data = {
        email: email.value,
      };
    } else {
      data = {
        nickname: nickname.value,
      };
    }

    Requester.put(API.profileItem(this.props.user.id), data)
        .then(({response, error}) => {
          console.log('response', response, 'error', error);
          const { user, onAuthorized } = this.props;
          if (response) {
            onAuthorized({...user, email: email.value, nickname: nickname.value});
        }
      });
  };

  toggleEditModalPassword = () =>
      this.setState({isShownModalPassword: !this.state.isShownModalPassword});
  toggleEditModalAvatar = () =>
      this.setState({isShownModalAvatar: !this.state.isShownModalAvatar});

  render() {
    const {email, nickname, isShownModalPassword, isShownModalAvatar} = this.state;
    const { user, onChangeMode, onAuthorized} = this.props;

    const saveDisabled = email.isError
        || nickname.isError
        || (user.email === email.value
            && user.nickname === nickname.value)
        || email.value.length === 0
        || nickname.value.length === 0;

    return (
        <div className={cn('edit-profile-page')}>
          {isShownModalPassword && <ModalWindow
              onClose={this.toggleEditModalPassword}
          >{<EditPasswordForm/>}</ModalWindow>}
          {isShownModalAvatar && <ModalWindow
              onClose={this.toggleEditModalAvatar}
          >{<EditAvatarForm
              onAuthorized={onAuthorized}
              user={user}
              onChangeMode={onChangeMode}
          />}</ModalWindow>}
          <div className={cn('edit-profile-page__container')}>
            <div className={cn('edit-profile-page__container-avatar')}>
              <AvatarProfile user={user}/>
              <div className={cn('edit-profile-page__container-edit-button')}>
                <EditButton onClick={this.toggleEditModalAvatar} />
              </div>
            </div>
            <div className={cn('edit-profile-page__container-edit')}>
              <div className={cn('edit-profile-page__container-form')}>
                <Form
                    onChangeValue={this.handleChangeValue}
                    onBlur={this.handleBlur}
                    inputs={[email, nickname]}
                />
              </div>
              <div className={cn('edit-profile-page__container-buttons')}>
                <SubmitButton
                    onClick={this.toggleEditModalPassword}
                    mode={modes.CHANGE_PASSWORD}/>
                <div className={cn('edit-profile-page__container-submit-buttons')}>
                  <div className={cn('edit-profile-page__container-save-button')}>
                    <SubmitButton
                        onClick={this.updateUser}
                        mode={modes.SAVE}
                        disabled={saveDisabled}
                    />
                  </div>
                  <SubmitButton
                      onClick={() => onChangeMode(CurPage.PROFILE)}
                      mode={modes.CANCEL}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}