import * as React from 'libs/Cheburact';
import className from 'libs/classNames';
import AuthButton from 'components/buttons/AuthButton/AuthButton';
const styles = require('./SignUpPage.modules.scss');

const cn = className(styles);

export default class SignUpPage extends React.Component {
  state = {
    authButtons: [
      {title: 'Вход', isActive: false},
      {title: 'Регистрация', isActive: true},
    ],
    inputs: [
      {
        placeholder: 'Введите email',
        textError: 'Неправильный email',
        isActive: true,
        isError: true,
      },
      {
        placeholder: 'Придумайте пароль',
        textError: 'Короткий пароль',
        isActive: false,
        isError: false,
      }
    ]
  };

  render() {
    const {authButtons} = this.state;

    return (
        <div className={cn('sign-up-page')}>
          <div className={cn('sign-up-page__container-buttons')}>
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