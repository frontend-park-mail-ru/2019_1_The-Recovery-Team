import * as React from 'libs/Cheburact';
import {InOutButtonModes} from 'components/buttons/InOutButton';
import Header from './Header';
// import StartPage from './StartPage/StartPage';
import MainBlock from './MainBlock';
// import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
const styles = require('./SitePart.modules.scss');

export default class SitePart extends React.Component {
  state = {
    isStartPage : false,
    isAuth : false,
    isLoginPage: true,
    inOutMode: InOutButtonModes.IN,
  };

  render() {
    const {isStartPage, isAuth, isLoginPage, inOutMode} = this.state;

    return (
        <div className={styles['site-part']}>
          <Header
              isStartPage={isStartPage}
              isAuth={isAuth}
              isLoginPage={isLoginPage}
              inOutMode={inOutMode}
          />
          {/*<StartPage />*/}
          <MainBlock>
            {/*<SignInPage/>*/}
            <SignUpPage/>
          </MainBlock>
        </div>
    );
  }
}
