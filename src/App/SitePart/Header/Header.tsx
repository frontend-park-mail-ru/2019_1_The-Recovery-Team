import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import {LogotypeSizes} from 'components/Logotype';
import Logotype from 'components/Logotype/Logotype';
import LabelAuthUser from 'components/LabelAuthUser/LabelAuthUser';
import InOutButton from 'components/buttons/InOutButton/InOutButton';
import VolumeButton from 'components/buttons/VolumeButton/VolumeButton';
import Tabbar from './Tabbar/Tabbar';
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
          <Tabbar />
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
