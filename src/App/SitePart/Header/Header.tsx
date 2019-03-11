import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import {LogotypeSizes} from 'components/Logotype';
import Logotype from 'components/Logotype/Logotype';
import LabelAuthUser from 'components/LabelAuthUser';
import InOutButton from 'components/buttons/InOutButton';
import VolumeButton from 'components/buttons/VolumeButton';
import Tabbar from './Tabbar/Tabbar';
import {CurPage} from '../..';
const styles = require('./Header.modules.scss');

const cn = classNames(styles);


export default class Header extends React.Component {
  handleIOClick = () => {
    const { user, onChangeMode, onLogout } = this.props;
    if (user) {
      onLogout();
    }
    else {
      onChangeMode(CurPage.SIGNIN);
    }
  };

  render() {
    const { user, mode, onChangeMode } = this.props;

    const labelUserHidden =
        mode === CurPage.SIGNIN
        || mode === CurPage.SIGNUP
        || mode === CurPage.PROFILE
        || mode === CurPage.EDIT_PROFILE
        || !user;

    const ioButtonHidden =
        user && mode !== CurPage.PROFILE && mode !== CurPage.EDIT_PROFILE
        || mode === CurPage.SIGNIN
        || mode === CurPage.SIGNUP;

    return (
        <div className={cn('header', 'header_main')}>
          {  mode !== CurPage.START && (
              <div className={cn('header__container-logotype')}>
                <Logotype size={LogotypeSizes.MIDDLE}/>
              </div>
          )}
          <div className={cn('header__tabbar')}>
            <Tabbar
                mode={mode}
                onChangeMode={onChangeMode}
            />
          </div>
          <div className={cn(
              'header__container-buttons',
              mode === CurPage.START && 'header__container-buttons_start-page'
          )}>
            <VolumeButton on={true} />
            { !labelUserHidden && <LabelAuthUser
                className={cn('header__container-user-wrapper')}
                user={user}
                onChangeMode={onChangeMode}
            />}
            { !ioButtonHidden && (<InOutButton isAuthenticated={!!user} onClick={this.handleIOClick}/>)}
          </div>
        </div>
    );
  }
}
