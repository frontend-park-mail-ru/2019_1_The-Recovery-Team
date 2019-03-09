import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import AvatarProfile from 'components/AvatarProfile';
import EditButton from 'components/buttons/EditButton';
import Form from 'components/Form';
import SubmitButton, {modes} from 'components/buttons/SubmitButton';
const styles = require('./EditProfilePage.modules.scss');

const cn = classNames(styles);

export default class EditProfilePage extends React.Component {
  state = {
    inputsSignIn: [
      {
        placeholder: 'Изменить email',
        isError: false,
        value: '',
      },
      {
        placeholder: 'Изменить никнейм',
        isError: false,
        value: '',
      }
    ],
  };

  render() {
    const {inputsSignIn} = this.state;
    const { user } = this.props;

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
                <Form inputs={inputsSignIn}/>
              </div>
              <div className={cn('edit-profile-page__container-buttons')}>
                <SubmitButton mode={modes.CHANGE_PASSWORD}/>
                <div className={cn('edit-profile-page__container-submit-buttons')}>
                  <div className={cn('edit-profile-page__container-save-button')}>
                    <SubmitButton mode={modes.SAVE}/>
                  </div>
                  <SubmitButton mode={modes.CANCEL}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}