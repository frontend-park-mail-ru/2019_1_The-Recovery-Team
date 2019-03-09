import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Header from './Header';
import MainBlock from './MainBlock';
import ProfilePage from './ProfilePage/';
import AuthPage from './AuthPage';
import StartPage from './StartPage/StartPage';
import {CurPage} from '..';
import LeadersPage from './LeadersPage';
const styles = require('./SitePart.modules.scss');

const cn = classNames(styles);

export default class SitePart extends React.Component {
  render() {
    const { user, mode, onChangeMode, onLogout } = this.props;

    return (
        <div className={cn('site-part')}>
          <Header
              user={user}
              mode={mode}
              onChangeMode={onChangeMode}
              onLogout={onLogout}
          />
          {mode === CurPage.START ? <StartPage /> :
              <MainBlock>
                {mode === CurPage.SIGNIN ? <AuthPage onChangeMode={onChangeMode} /> : null}
                {mode === CurPage.SIGNUP ? <SignUpPage onChangeMode={onChangeMode} /> : null}
                {mode === CurPage.PROFILE ? <ProfilePage user={user} /> : null}
                {mode === CurPage.LEADERS ? <LeadersPage /> : null}
              </MainBlock>}
        </div>
    );
  }
}
