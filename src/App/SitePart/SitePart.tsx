import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Header from './Header';
import MainBlock from './MainBlock';
import SignUpPage from './SignUpPage';
import ProfilePage from './ProfilePage/';
import SignInPage from './SignInPage';
import StartPage from './StartPage/StartPage';
import {curPage} from '..';
const styles = require('./SitePart.modules.scss');

const cn = classNames(styles);

export default class SitePart extends React.Component {
  state = {
    isStartPage : this.props.mode === curPage.START,
    isAuthenticated : this.props.user !== null,
    isLoginPage: this.props.mode === curPage.SIGNOUT || this.props.mode === curPage.SIGNIN,
    isProfilePage: this.props.mode === curPage.PROFILE,
  };

  render() {
    const {isStartPage, isLoginPage, isAuthenticated, isProfilePage} = this.state;
    const { user, mode } = this.props;

    return (
        <div className={cn('site-part')}>
          <Header
              user={user}
              isStartPage={isStartPage}
              isAuthenticated={isAuthenticated}
              isLoginPage={isLoginPage}
              isProfilePage={isProfilePage}
              mode={mode}
          />
          {mode === curPage.START ? <StartPage /> :
              <MainBlock>
                {mode === curPage.SIGNIN ? <SignInPage /> : null}
                {mode === curPage.SIGNOUT ? <SignUpPage /> : null}
                {mode === curPage.PROFILE ? <ProfilePage user={user} /> : null}
              </MainBlock>}
        </div>
    );
  }
}
