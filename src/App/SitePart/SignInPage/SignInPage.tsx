import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import AuthButton from 'components/buttons/AuthButton/AuthButton';
const styles = require('./SignInPage.modules.scss');

const cn = classNames(styles);

export default class SignInPage extends React.Component {
  state = {
    authButtons: [
      {title: 'Вход', isActive: true},
      {title: 'Регистрация', isActive: false},
    ]
  };

  render() {
    const {authButtons} = this.state;

    return (
        <div className={cn('sign-in-page')}>
          <div className={cn('sign-in-page__container-buttons')}>
            {
              authButtons.map(({title, isActive}) => (
                  <AuthButton className={cn('sign-in-page__button')}
                              isActive={isActive}
                  >{title}</AuthButton>
              ))
            }
          </div>
        </div>
    );
  }
}