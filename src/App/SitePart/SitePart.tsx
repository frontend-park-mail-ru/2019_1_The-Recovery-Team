import * as React from 'libs/Cheburact';
import Header from './Header';
// import StartPage from './StartPage/StartPage';
import MainBlock from './MainBlock/MainBlock';
import SignInPage from './SignInPage/SignInPage';
import {InOutButtonModes} from 'components/buttons/InOutButton';
const styles = require('./SitePart.modules.scss');

export default class SitePart extends React.Component {
  state = {
    isStartPage : false,
    isAuth : false,
    isAuthPage: false,
    inOutMode: InOutButtonModes.IN,
  };

  render() {
    const {isStartPage, isAuth, isAuthPage, inOutMode} = this.state;

    return (
        <div className={styles['site-part']}>
          <Header
              isStartPage={isStartPage}
              isAuth={isAuth}
              isAuthPage={isAuthPage}
          inOutMode={inOutMode}/>
          {/*<StartPage />*/}
          <MainBlock>
            <SignInPage/>
          </MainBlock>
        </div>
    );
  }
}
