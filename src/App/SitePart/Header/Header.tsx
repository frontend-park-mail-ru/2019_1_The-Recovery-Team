import * as React from 'libs/Cheburact';
import Tabbar from './Tabbar/Tabbar';
import VolumeButton from 'components/buttons/VolumeButton/VolumeButton';
import LabelAuthUser from 'components/LabelAuthUser/LabelAuthUser';
import classNames from 'libs/classNames';
const styles = require('./Header.modules.scss');
const __avatar = require('./__img/AvatarM.png');

const cn = classNames(styles);

export default class Header extends React.Component {
  state = {
    user: {
      nickname: 'Nagibator228',
      avatar: __avatar,
    }
  };

  render() {
    const { isStartPage, isAuth } = this.props;
    const { user } = this.state;

    return (
        <div className={styles['header']}>
          <Tabbar/>
          <div className={cn(
              'header__container-buttons',
              isStartPage && 'header__container-buttons_start-page',
              isAuth && 'header__container-buttons_auth')}
          >
            <VolumeButton on={true} />
            <LabelAuthUser user={user}/>
          </div>
        </div>
    );
  }
}