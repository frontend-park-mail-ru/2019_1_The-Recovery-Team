import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Header from './Header';
import MainBlock from './MainBlock';
import SignUpPage from './SignUpPage';
import ProfilePage from './ProfilePage/';
import SignInPage from './SignInPage';
import StartPage from './StartPage/StartPage';
import {CurPage} from '..';
import LeadersPage from './LeadersPage';
const styles = require('./SitePart.modules.scss');

const cn = classNames(styles);

export default class SitePart extends React.Component {
  render() {
    const { user, mode, onChangeMode } = this.props;

    return (
        <div className={cn('site-part')}>
          <Header
              user={user}
              mode={mode}
              onChangeMode={onChangeMode}
          />
          {mode === CurPage.START ? <StartPage /> :
              <MainBlock>
                {mode === CurPage.SIGNIN ? <SignInPage /> : null}
                {mode === CurPage.SIGNUP ? <SignUpPage /> : null}
                {mode === CurPage.PROFILE ? <ProfilePage user={user} /> : null}
                {mode === CurPage.LEADERS ? <LeadersPage /> : null}
              </MainBlock>}
        </div>
    );
  }
}
