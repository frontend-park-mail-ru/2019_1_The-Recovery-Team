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

  debounceHandler = debounce((name: string, value: string) => {
    const field: InputConfig = this.state[name];

    if (
      (name === 'email' || name === 'nickname') &&
      value !== this.props.user[name]
    ) {
      Requester.get(API.profiles(), {
        [name]: value,
      }).then(({ response, error }) => {
        if (!error) {
          this.setState({
            [name]: {
              ...field,
              value,
              placeholder: `Такой ${field.label} уже существует`,
              isError: true,
              touched: true,
            },
          });
        } else {
          this.changeValueField(name, value, field);
        }
      });
    } else {
      this.changeValueField(name, value, field);
    }
  }, 1000);

  changeValueField(name: string, value, field: InputConfig) {
    this.setState({
      [name]: {
        ...field,
        value,
        placeholder: value.length ? field.label : field.placeholder,
        isError: value.length ? false : field.isError,
        touched: true,
      },
    });
  }

  handleBlur = (name: string) => {
    const field: InputConfig = this.state[name];
    if (field.value.length === 0 && field.touched) {
      this.setState({
        [name]: {
          ...field,
          placeholder: `${field.label} - обязательное поле`,
          isError: true,
        },
      });
    }
  };

  updateUser = () => {
    const { email, nickname } = this.state;
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

    Requester.put(API.profileItem(this.props.user.id), data).then(
      ({ response, error }) => {
        const { user, onAuthorized } = this.props;
        if (response) {
          onAuthorized({
            ...user,
            email: email.value,
            nickname: nickname.value,
          });
        }
      }
    );
  };

  toggleEditModalPassword = () =>
    this.setState({ isShownModalPassword: !this.state.isShownModalPassword });
  toggleEditModalAvatar = () =>
    this.setState({ isShownModalAvatar: !this.state.isShownModalAvatar });

  render() {
    const {
      email,
      nickname,
      isShownModalPassword,
      isShownModalAvatar,
    } = this.state;
    const { user, onChangeMode, onAuthorized } = this.props;

    const saveDisabled =
      email.isError ||
      nickname.isError ||
      (user.email === email.value && user.nickname === nickname.value) ||
      email.value.length === 0 ||
      nickname.value.length === 0;

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
          <div className={cn('edit-profile-page__left-container')}>
            <div className={cn('edit-profile-page__container-avatar')}>
              <AvatarProfile user={user} />
              <div className={cn('edit-profile-page__container-edit-button')}>
                <EditButton onClick={this.toggleEditModalAvatar} />
              </div>
            </div>
          </div>
          <div className={cn('edit-profile-page__container-edit')}>
            <div className={cn('edit-profile-page__container-form')}>
              <Form
                onChangeValue={this.debounceHandler}
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
                    disabled={saveDisabled}
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
