import AvatarProfile from 'components/AvatarProfile';
import EditButton from 'components/buttons/EditButton';
import SubmitButton, { modes } from 'components/buttons/SubmitButton';
import Form from 'components/Form';
import ModalWindow from 'components/ModalWindow';
import API from 'config/API';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import debounce from 'libs/debounce';
import Requester from 'libs/Requester';
import { InputConfig } from 'utils/form/types';
import {
  touchField,
  validateAlreadyExists,
  validateRequired,
} from 'utils/form/validators';
import { CurPage } from '../..';
import EditAvatarForm from './EditAvatarForm';
import EditPasswordForm from './EditPasswordForm';

const styles = require('./EditProfilePage.modules.scss');

const cn = classNames(styles);

interface State {
  email: InputConfig;
  nickname: InputConfig;
  isShownModalPassword: boolean;
  isShownModalAvatar: boolean;
}

export default class EditProfilePage extends React.Component {
  state: State = {
    email: {
      placeholder: 'Email',
      isError: false,
      value: this.props.user.email,
      name: 'email',
      touched: false,
      label: 'Email',
      type: 'email',
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

  validateAlreadyExists = debounce(async (field: InputConfig) => {
    if (
      field.value &&
      field.value !== '' &&
      field.value !== this.props.user[field.name] &&
      (field.name === 'email' || field.name === 'nickname')
    ) {
      const result = await validateAlreadyExists(API.profiles())(field);
      this.setState({
        [field.name]: result,
      });
    }
  }, 500);

  handleChangeValue = (name: string, value: string) => {
    const nextField = touchField(this.state[name], value);

    this.setState({
      [name]: nextField,
    });

    this.validateAlreadyExists(nextField);
  };

  handleBlur = (name: string) =>
    this.setState({
      [name]: validateRequired(this.state[name]),
    });

  updateUser = async () => {
    if (this.saveDisabled) {
      return;
    }

    const { email, nickname } = this.state;

    const data = {
      nickname: nickname.value,
      email: email.value,
    };

    const { response } = await Requester.put(
      API.profileItem(this.props.user.id),
      data
    );
    const { user, onAuthorized } = this.props;
    if (response) {
      onAuthorized({
        ...user,
        email: email.value,
        nickname: nickname.value,
      });
    }
  };

  toggleEditModalPassword = () =>
    this.setState({ isShownModalPassword: !this.state.isShownModalPassword });
  toggleEditModalAvatar = () =>
    this.setState({ isShownModalAvatar: !this.state.isShownModalAvatar });

  get saveDisabled() {
    const { email, nickname } = this.state;
    return (
      email.isError ||
      nickname.isError ||
      email.value.length === 0 ||
      nickname.value.length === 0
    );
  }

  render() {
    const {
      email,
      nickname,
      isShownModalPassword,
      isShownModalAvatar,
    } = this.state;
    const { user, onChangeMode, onAuthorized } = this.props;

    return (
      <div className={cn('edit-profile-page')}>
        {isShownModalPassword && (
          <ModalWindow onClose={this.toggleEditModalPassword}>
            {
              <EditPasswordForm
                user={user}
                onAuthorized={onAuthorized}
                onChangeMode={onChangeMode}
              />
            }
          </ModalWindow>
        )}
        {isShownModalAvatar && (
          <ModalWindow onClose={this.toggleEditModalAvatar}>
            {
              <EditAvatarForm
                onAuthorized={onAuthorized}
                user={user}
                onChangeMode={onChangeMode}
              />
            }
          </ModalWindow>
        )}
        <div className={cn('edit-profile-page__container')}>
          <div className={cn('edit-profile-page__container-avatar')}>
            <AvatarProfile user={user} />
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
                mode={modes.SETTINGS}
              >
                {'Изменить пароль'}
              </SubmitButton>
              <div
                className={cn('edit-profile-page__container-submit-buttons')}
              >
                <div className={cn('edit-profile-page__container-save-button')}>
                  <SubmitButton
                    onClick={this.updateUser}
                    mode={modes.SAVE}
                    disabled={this.saveDisabled}
                  >
                    {'Сохранить'}
                  </SubmitButton>
                </div>
                <SubmitButton
                  onClick={() => onChangeMode(CurPage.PROFILE)}
                  mode={modes.CANCEL}
                >
                  {'Отменить'}
                </SubmitButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
