import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import {LogotypeSizes} from 'components/Logotype';
import Logotype from 'components/Logotype/Logotype';
import LabelAuthUser from 'components/LabelAuthUser';
import InOutButton from 'components/buttons/InOutButton';
import VolumeButton from 'components/buttons/VolumeButton';
import Tabbar from './Tabbar/Tabbar';
import {curPage} from '../..';
const styles = require('./Header.modules.scss');


const cn = classNames(styles);

export default class Header extends React.Component {
  render() {
    const { user, mode} = this.props;

    const labelUserHidden =
        mode === curPage.SIGNIN
        || mode === curPage.SIGNUP
        || mode === curPage.PROFILE
        || !user;

    const ioButtonHidden =
        user && mode !== curPage.PROFILE
        || mode === curPage.SIGNIN
        || mode === curPage.SIGNUP;

    return (
        <div className={cn('header', 'header_main')}>
          {  mode !== curPage.START && (
              <div className={cn('header__container-logotype')}>
                <Logotype size={LogotypeSizes.MIDDLE}/>
              </div>
          )}
          <Tabbar mode={mode} />
          <div className={cn(
              'header__container-buttons',
              mode === curPage.START && 'header__container-buttons_start-page'
          )}>
            <VolumeButton on={true} />
            { !labelUserHidden && <LabelAuthUser className={cn('header__container-user-wrapper')} user={user}/>}
            { !ioButtonHidden && (<InOutButton isAuthenticated={!!user}/>)}
          </div>
        </div>
    );
  }
}
