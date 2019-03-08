import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Header from './Header';
import MainBlock from './MainBlock';
import SignUpPage from './SignUpPage';
import ProfilePage from './ProfilePage/';
import SignInPage from './SignInPage';
import StartPage from './StartPage/StartPage';
import {curPage} from '..';
import LeadersPage from './LeadersPage';
const styles = require('./SitePart.modules.scss');

const cn = classNames(styles);

export default class SitePart extends React.Component {
  render() {
    const { user, mode, } = this.props;

    return (
        <div className={cn('site-part')}>
          <Header
              user={user}
              mode={mode}
          />
          {mode === curPage.START ? <StartPage /> :
              <MainBlock>
                {mode === curPage.SIGNIN ? <SignInPage /> : null}
                {mode === curPage.SIGNUP ? <SignUpPage /> : null}
                {mode === curPage.PROFILE ? <ProfilePage user={user} /> : null}
                {mode === curPage.LEADERS ? <LeadersPage /> : null}
              </MainBlock>}
        </div>
    );
  }
}
