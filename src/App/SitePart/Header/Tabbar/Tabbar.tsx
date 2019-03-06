import * as React from 'libs/Cheburact';
import Tab from './Tab/Tab';
const styles = require('./Tabbar.modules.scss');

export default class Tabbar extends React.Component {
  render() {
    return (
        <div className={styles['tabbar']}>
          <Tab title={'Играть'}/>
          <Tab title={'Правила'}/>
          <Tab title={'Лидеры'}/>
          <Tab title={'О нас'}/>
        </div>
    );
  }
}
