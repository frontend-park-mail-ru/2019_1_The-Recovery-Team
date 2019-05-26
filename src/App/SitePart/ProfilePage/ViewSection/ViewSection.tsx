import SimpleButton from 'components/SimpleButton';
import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import userStore, { actionUserLogout } from 'store/userStore';

export default class ViewSection extends React.Component {
  handleLogout = () => userStore.emit(actionUserLogout());

  render() {
    const { user, outerStyles } = this.props;
    const outerCN = classNames(outerStyles);

    return (
      <div key="view-mode">
        <div className={outerCN('heading-item', 'heading-item_left')}>
          <p className={outerCN('heading-item__title')}>Никнейм</p>
          <p className={outerCN('heading-item__text')}>{user.nickname}</p>
        </div>
        {user.email && (
          <div className={outerCN('heading-item', 'heading-item_left')}>
            <p className={outerCN('heading-item__title')}>Электронная почта</p>
            <p className={outerCN('heading-item__text')}>{user.email}</p>
          </div>
        )}
        {!user.oauth && (
          <div className={outerCN('heading-item', 'heading-item_left')}>
            <p className={outerCN('heading-item__title')}>Пароль</p>
            <p className={outerCN('heading-item__text')}>**********</p>
          </div>
        )}
        {user.oauth && user.oauthId && (
          <div className={outerCN('heading-item', 'heading-item_left')}>
            <p className={outerCN('heading-item__title')}>Авторизация через</p>
            <p className={outerCN('heading-item__text')}>
              <span
                className={outerCN(
                  'heading-item__icon',
                  `heading-item__icon_${user.oauth}`
                )}
              />
              <span className={outerCN('heading-item__text-content')}>
                {user.oauthId}
              </span>
            </p>
          </div>
        )}
        <SimpleButton
          to={routeCreators.TO_PROFILE_EDIT()}
          className={outerCN('profile-page__item')}
        >
          Редактировать
        </SimpleButton>
        <SimpleButton onClick={this.handleLogout} air={true}>
          Выйти из аккаунта
        </SimpleButton>
      </div>
    );
  }
}
