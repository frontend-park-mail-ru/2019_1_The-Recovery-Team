import * as React from 'libs/Cheburact';
import Tab from './Tab/Tab';
const styles = require('./Tabbar.modules.scss');

export default class Tabbar extends React.Component {
  state = {
    tabs: [
      {title: 'Играть', isActive: false},
      {title: 'Правила', isActive: false},
      {title: 'Лидеры', isActive: false},
      {title: 'О нас', isActive: false}
    ]
  };

  render() {
    const {tabs} = this.state;

    return (
        <div className={styles['tabbar']}>
          {
            tabs.map(({title, isActive}) => (
              <Tab isActive={isActive}>{title}</Tab>
            ))
          }
        </div>
    );
  }
}
