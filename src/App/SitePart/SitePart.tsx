import * as React from 'libs/Cheburact';
import Header from './Header';
import StartPage from './StartPage/StartPage';
const styles = require('./SitePart.modules.scss');

export default class SitePart extends React.Component {
  state = {
    isStartPage : true,
    isAuth : true,
  };

  render() {
    const {isStartPage, isAuth} = this.state;

    return (
        <div className={styles['site-part']}>
          <Header isStartPage={isStartPage} isAuth={isAuth} />
          <StartPage />
        </div>
    );
  }
}
