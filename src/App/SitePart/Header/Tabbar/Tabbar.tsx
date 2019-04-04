import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import routerStore, { match, routerActions } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
import { CurPage } from '../../..';
import Tab from './Tab';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
const styles = require('./Tabbar.modules.scss');
const cn = classNames(styles);

@connectToCheburstore
export default class Tabbar extends React.Component {
  state = {
    tabs: [
      {
        title: 'Играть',
        to: routeCreators.TO_START(),
      },
      {
        title: 'Правила',
        to: routeCreators.TO_RULES(),
      },
      {
        title: 'Лидеры',
        to: routeCreators.TO_LEADER_BOARD(0),
      },
      {
        title: 'О нас',
        to: routeCreators.TO_ABOUT(),
      },
    ],
  };

  @onCheburevent(routerStore, routerActions.PUSH_OK)
  selfUpdate() {
    this.setState({});
  }

  handleClick = (mode: CurPage) => this.props.onChangeMode(mode);

  render() {
    const { tabs } = this.state;
    const { className } = this.props;
    const { pathname } = window.location;

    return (
      <div className={`${cn('tabbar')} ${className}`}>
        {tabs.map(({ title, to }) => (
          <Tab isActive={match(to, pathname, false)} to={to}>
            {title}
          </Tab>
        ))}
      </div>
    );
  }
}
