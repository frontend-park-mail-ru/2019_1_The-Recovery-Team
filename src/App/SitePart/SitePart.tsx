import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { CurPage } from '..';
import AuthPage from './AuthPage';
import EditProfilePage from './EditProfilePage';
import Header from './Header';
import LeadersPage from './LeadersPage';
import MainBlock from './MainBlock';
import ProfilePage from './ProfilePage';
import StartPage from './StartPage/StartPage';
const styles = require('./SitePart.modules.scss');

const cn = classNames(styles);

export default class SitePart extends React.Component {
  public render() {
    const { user, mode, onChangeMode, onLogout, onAuthorized } = this.props;

    return (
      <div className={cn('site-part')}>
        <Header
          user={user}
          mode={mode}
          onChangeMode={onChangeMode}
          onLogout={onLogout}
        />
        {mode === CurPage.START ? (
          <StartPage />
        ) : (
          <MainBlock>
            {mode === CurPage.SIGNIN || mode === CurPage.SIGNUP ? (
              <AuthPage
                onChangeMode={onChangeMode}
                onAuthorized={onAuthorized}
              />
            ) : null}
            {mode === CurPage.PROFILE ? (
              <ProfilePage user={user} onChangeMode={onChangeMode} />
            ) : null}
            {mode === CurPage.LEADERS ? <LeadersPage /> : null}
            {mode === CurPage.EDIT_PROFILE ? (
              <EditProfilePage
                onChangeMode={onChangeMode}
                user={user}
                onAuthorized={onAuthorized}
              />
            ) : null}
          </MainBlock>
        )}
      </div>
    );
  }
}
