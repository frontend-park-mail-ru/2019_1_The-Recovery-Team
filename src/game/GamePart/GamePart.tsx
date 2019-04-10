import { routeCreators, routesMap } from 'config/routes';
import {
  actionGameInit,
  actionGameStop,
  gameStoreActions,
} from 'game/store/actions';
import * as React from 'libs/Cheburact/index';
import { actionRouterPush, Route } from 'libs/Cheburouter';
import routerStore from 'libs/Cheburouter/routerStore';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore from 'store/userStore';
import { GameModes } from '../config';
import gameStore from '../store';
import Arena from './Arena/Arena';
import FinishPage from './FinishPage/FinishPage';
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
