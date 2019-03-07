import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import {InOutButtonModes} from 'components/buttons/InOutButton';
import Header from './Header';
import MainBlock from './MainBlock';
import SignUpPage from './SignUpPage';
// import SignInPage from './SignInPage';
// import StartPage from './StartPage/StartPage';
const styles = require('./SitePart.modules.scss');

const cn = classNames(styles);

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
        <div className={cn('site-part')}>
          <Header
              isStartPage={isStartPage}
              isAuth={isAuth}
              isLoginPage={isLoginPage}
              inOutMode={inOutMode}
          />
          {/*<StartPage />*/}
          <MainBlock>
            {/*<SignInPage />*/}
            <SignUpPage />
          </MainBlock>
        </div>
    );
  }
}
