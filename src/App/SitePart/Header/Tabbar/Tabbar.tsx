import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import routerStore, { match, routerActions } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
import Tab from './Tab';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
const styles = require('./Tabbar.modules.scss');
const cn = classNames(styles);

// @ts-ignore
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
        to: routeCreators.TO_LEADER_BOARD(),
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

  render() {
    const { tabs } = this.state;
    const { className } = this.props;
    const { pathname } = window.location;
    const tabbarClasses = `${className} ${cn('tabbar')}`;

    return (
      <div className={tabbarClasses}>
        {tabs.map(({ title, to }) => (
          <Tab isActive={match(to, pathname, false)} to={to}>
            {title}
          </Tab>
        ))}
      </div>
    );
  }
}
