import * as React from 'libs/Cheburact';
import Tab from './Tab/Tab';
import {curPage} from '../../..';
const styles = require('./Tabbar.modules.scss');

export default class Tabbar extends React.Component {
  state = {
    tabs: [
      {title: 'Играть', curPage: curPage.START},
      {title: 'Правила', curPage: curPage.RULES},
      {title: 'Лидеры', curPage: curPage.LEADERS},
      {title: 'О нас', curPage: curPage.ABOUT}
    ]
  };

  render() {
    const {tabs} = this.state;
    const {mode} = this.props;

    return (
        <div className={styles['tabbar']}>
          {
            tabs.map(({title, curPage}) => (
              <Tab isActive={mode === curPage}>{title}</Tab>
            ))
          }
        </div>
    );
  }
}
