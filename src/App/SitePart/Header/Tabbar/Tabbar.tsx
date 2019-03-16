import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { CurPage } from '../../..';
import Tab from './Tab/Tab';
const styles = require('./Tabbar.modules.scss');
const cn = classNames(styles);

export default class Tabbar extends React.Component {
  state = {
    tabs: [
      { title: 'Играть', curPage: CurPage.START },
      { title: 'Правила', curPage: CurPage.RULES },
      { title: 'Лидеры', curPage: CurPage.LEADERS },
      { title: 'О нас', curPage: CurPage.ABOUT },
    ],
  };

  handleClick = (mode: CurPage) => this.props.onChangeMode(mode);

  render() {
    const { tabs } = this.state;
    const { mode, className } = this.props;

    return (
      <div className={`${cn('tabbar')} ${className}`}>
        {tabs.map(({ title, curPage }) => (
          <Tab
            isActive={mode === curPage}
            onClick={() => this.handleClick(curPage)}
          >
            {title}
          </Tab>
        ))}
      </div>
    );
  }
}
