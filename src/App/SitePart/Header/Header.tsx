import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import {LogotypeSizes} from 'components/Logotype';
import Logotype from 'components/Logotype/Logotype';
import LabelAuthUser from 'components/LabelAuthUser/LabelAuthUser';
import InOutButton from 'components/buttons/InOutButton/InOutButton';
import VolumeButton from 'components/buttons/VolumeButton/VolumeButton';
import Tabbar from './Tabbar/Tabbar';
const styles = require('./Header.modules.scss');


const cn = classNames(styles);

export default class Header extends React.Component {
  render() {
    const { isStartPage, isLoginPage, isAuthenticated, isProfilePage, user, mode} = this.props;

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
          <Tabbar mode={mode} />
          <div className={cn(
              'header__container-buttons',
              isStartPage && 'header__container-buttons_start-page',
              !((isStartPage && !user) || (isProfilePage && user)) && 'header__container-buttons_auth')}
          >
            <VolumeButton on={true} />
            { (user && !isLoginPage && !isProfilePage) ? <LabelAuthUser user={user}/> : null }
            { (isStartPage && !user) || (isProfilePage && user)
                ? (<InOutButton isAuthenticated={isAuthenticated}/>)
                : null
            }
          </div>
        </div>
    );
  }
}
