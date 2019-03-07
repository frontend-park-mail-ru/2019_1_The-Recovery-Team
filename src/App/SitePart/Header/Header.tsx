import * as React from 'libs/Cheburact';
import Tabbar from './Tabbar/Tabbar';
import VolumeButton from 'components/buttons/VolumeButton/VolumeButton';
import LabelAuthUser from 'components/LabelAuthUser/LabelAuthUser';
import classNames from 'libs/classNames';
import Logotype from 'components/Logotype/Logotype';
import {LogotypeSizes} from 'components/Logotype';
import InOutButton from 'components/buttons/InOutButton/InOutButton';
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
    const { isStartPage, isAuth, isLoginPage, inOutMode} = this.props;
    const { user } = this.state;

    return (
        <div className={cn('header', 'header_main')}>
          {
            !isStartPage ?
                (
                    <div className={cn('header__container-logotype')}>
                      <Logotype size={LogotypeSizes.MIDDLE}/>
                    </div>
                ) : null
          }
          <Tabbar/>
          <div className={cn(
              'header__container-buttons',
              isStartPage && 'header__container-buttons_start-page',
              isAuth && 'header__container-buttons_auth')}
          >
            <VolumeButton on={true} />
            {
              isAuth ?
                  (<LabelAuthUser user={user}/>) :
                  !isLoginPage ?
                      (<InOutButton inOutMode={inOutMode}/>) : null
            }
          </div>
        </div>
    );
  }
}