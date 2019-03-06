import * as React from 'libs/Cheburact';
import Header from './Header';
import StartPage from "./StartPage/StartPage";
const styles = require('./SitePart.modules.scss');

export default class SitePart extends React.Component {
  render() {
    return (
        <div className={styles['site-part']}>
          <Header isStartPage={true} isAuth={true}/>
          <StartPage/>
        </div>
    );
  }
}
