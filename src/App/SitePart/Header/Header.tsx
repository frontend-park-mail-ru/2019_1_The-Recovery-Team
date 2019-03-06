import * as React from 'libs/Cheburact';
import Tabbar from './Tabbar/Tabbar';
import VolumeButton from 'components/buttons/VolumeButton/VolumeButton';
import LabelAuthUser from 'components/LabelAuthUser/LabelAuthUser';
import classNames from 'libs/classNames';
const styles = require('./Header.modules.scss');

const cn = classNames(styles);

export default class Header extends React.Component {
  user = {
    nickname: 'Nagibator228'
  };

  render() {
    return (
        <div className={styles['header']}>
          <Tabbar/>
          <div className={cn(
              'header__container-buttons',
              this.props.isStartPage && 'header__container-buttons_start-page',
              this.props.isAuth && 'header__container-buttons_auth')}>
            <VolumeButton/>
            <LabelAuthUser nickname={this.user.nickname}/>
          </div>
        </div>
    );
  }
}