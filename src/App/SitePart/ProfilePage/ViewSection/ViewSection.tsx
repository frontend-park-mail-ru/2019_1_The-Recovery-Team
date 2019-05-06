import SimpleButton from 'components/SimpleButton';
import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import userStore, { actionUserLogout } from 'store/userStore';

// const styles = require('./ViewSection.modules.scss');
// const cn = classNames(styles);

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
        <div className={outerCN('heading-item', 'heading-item_left')}>
          <p className={outerCN('heading-item__title')}>Электронная почта</p>
          <p className={outerCN('heading-item__text')}>{user.email}</p>
        </div>
        <div className={outerCN('heading-item', 'heading-item_left')}>
          <p className={outerCN('heading-item__title')}>Пароль</p>
          <p className={outerCN('heading-item__text')}>**********</p>
        </div>
        <SimpleButton
          to={routeCreators.TO_PROFILE_EDIT()}
          className={outerCN('profile-page__item')}
        >
          Редактировать
        </SimpleButton>
        <SimpleButton onClick={this.handleLogout} air={true}>
          Выйти
        </SimpleButton>
      </div>
    );
  }
}
