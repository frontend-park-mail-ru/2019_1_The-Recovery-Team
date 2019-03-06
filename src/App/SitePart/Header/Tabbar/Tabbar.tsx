import * as React from 'libs/Cheburact';
import Tab from './Tab/Tab';
const styles = require('./Tabbar.modules.scss');

export default class Tabbar extends React.Component {
  state = {
    tabs: [
      {title: 'Играть', isActive: true},
      {title: 'Правила', isActive: false},
      {title: 'Лидеры', isActive: false},
      {title: 'О нас', isActive: false}
    ]
  };

  render() {
    return (
        <div className={styles['tabbar']}>
          { this.state.tabs.map(({title, isActive}) => (
            <Tab
                title={title}
                isActive={isActive}
            />
          ))
          }
        </div>
    );
  }
}
