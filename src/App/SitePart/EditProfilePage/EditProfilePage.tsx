import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import AvatarProfile from 'components/AvatarProfile';
import EditButton from 'components/buttons/EditButton';
import Form, { InputConfig } from 'components/Form';
import SubmitButton, {modes} from 'components/buttons/SubmitButton';
import { CurPage } from '../..';
import Requester from 'libs/Requester/Requester';
import API from 'config/API';
const styles = require('./EditProfilePage.modules.scss');

const cn = classNames(styles);

interface State {
  email: InputConfig;
  nickname: InputConfig;
}

export default class EditProfilePage extends React.Component {
  state = {
    email: {
      placeholder: 'Email',
      isError: false,
      value: this.props.user.email,
      name: 'email',
      touched: false,
      label: 'Email',
    },
    nickname: {
      placeholder: 'Никнейм',
      isError: false,
      value: this.props.user.nickname,
      name: 'nickname',
      touched: false,
      label: 'Никнейм',
    },
  };

  handleChangeValue = (name: string, value: string) => {
    const field: InputConfig = this.state[name];
    this.setState({
      [name]: {
        ...field,
        placeholder: value.length ? field.label : field.placeholder,
        isError: value.length ? false : field.isError,
        value,
        touched: true,
      }
    });
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
    console.log(this.props);
    Requester.put(API.profileItem(this.props.user.id),
        {email: email.value,
          nickname: nickname.value,
        }).then(({response, error}) => {
      const { user, onAuthorized } = this.props;
      if (response) {
        onAuthorized({...user, email: email.value, nickname: nickname.value});
      }
      });
  };

  render() {
    const {email, nickname} = this.state;
    const { user, onChangeMode} = this.props;

    return (
        <div className={cn('edit-profile-page')}>
          <div className={cn('edit-profile-page__container')}>
            <div className={cn('edit-profile-page__container-avatar')}>
              <AvatarProfile user={user}/>
              <div className={cn('edit-profile-page__container-edit-button')}>
                <EditButton/>
              </div>
            </div>
            <div className={cn('edit-profile-page__container-edit')}>
              <div className={cn('edit-profile-page__container-form')}>
                <Form onChangeValue={this.handleChangeValue} onBlur={this.handleBlur} inputs={[email, nickname]}/>
              </div>
              <div className={cn('edit-profile-page__container-buttons')}>
                <SubmitButton mode={modes.CHANGE_PASSWORD}/>
                <div className={cn('edit-profile-page__container-submit-buttons')}>
                  <div className={cn('edit-profile-page__container-save-button')}>
                    <SubmitButton onClick={this.updateUser} mode={modes.SAVE}/>
                  </div>
                  <SubmitButton onClick={() => onChangeMode(CurPage.PROFILE)} mode={modes.CANCEL}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}