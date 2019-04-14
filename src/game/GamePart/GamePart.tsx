import { routeCreators, routesMap } from 'config/routes';
import gameStore from 'game/store';
import { gameStoreActions } from 'game/store/actions';
import * as React from 'libs/Cheburact/index';
import routerStore, { actionRouterPush, Route } from 'libs/Cheburouter';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import Arena from './Arena';
import FinishPage from './FinishPage';
import PausePage from './PausePage';

const styles = require('./GamePart.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class GamePart extends React.Component {
  @onCheburevent(gameStore, gameStoreActions.SET_GAME_OVER)
  handleGameOver() {
    routerStore.emit(
      actionRouterPush({
        path: routeCreators.TO_FINISH_PAGE(),
      })
    );
  }

  public render() {
    return (
      <div className={cn('game-part')}>
        <Route
          template={routesMap.GAME_PART.template}
          component={Arena}
          exact={true}
        />
        <Route template={routesMap.PAUSE_PAGE.template} component={PausePage} />
        <Route
          template={routesMap.FINISH_PAGE.template}
          component={FinishPage}
        />
      </div>
    );
  }
}
