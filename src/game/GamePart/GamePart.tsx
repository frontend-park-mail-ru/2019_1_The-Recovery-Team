import { routesMap } from 'config/routes';
import * as React from 'libs/Cheburact/index';
import { Route } from 'libs/Cheburouter';
import StartPage from '../../App/SitePart/StartPage/StartPage';
import { GameModes } from '../config';
import gameStore from '../store';
import { actionGameInit, actionGameStop } from '../store/actions';
import Arena from './Arena/Arena';
import FinishPage from './FinishPage/FinishPage';
import PausePage from './PausePage';
import classNames from 'libs/classNames';
import {FinishTypes} from "./FinishPage/config/finishTypes";
const styles = require('./GamePart.modules.scss');

const cn = classNames(styles);


export default class GamePart extends React.Component {
  state = {
    user: {
      nickname: 'opana',
    },
    opponent: null,
    resources: [
      { type: 'lifebuoy', number: 0 },
      { type: 'sand', number: 0 },
      { type: 'bomb', number: 0 },
    ],
  };

  componentDidMount() {
    gameStore.emit(
      actionGameInit({
        isOnline: false,
        mode: GameModes.SINGLEPLAYER,
      })
    );
  }

  componentWillUnmount() {
    gameStore.emit(actionGameStop());
  }

  public render() {
    return (
      // <Arena />
      <div className={cn('game-part')}>
        <Route template={routesMap.PAUSE_PAGE.template} component={PausePage} />
        <Route
          template={routesMap.FINISH_PAGE.template}
          component={FinishPage}
          mode={GameModes.SINGLEPLAYER}
          finishType={FinishTypes.WIN}
        />
      </div>

      // <div className={cn('game-part')}>
      //   <div className={cn('game-part__header')}>
      //     <div
      //       className={cn(
      //         'game-part__label-container',
      //         'game-part__label-container_left'
      //       )}
      //     >
      //       <LabelAuthUser user={this.state.user} reverse={true} />
      //     </div>
      //     <div className={cn('game-part__timer-container')}>
      //       <Timer />
      //     </div>
      //   </div>
      //   <div className={cn('game-part__resources')}>
      //     {this.state.resources.map(resource => (
      //       <div className={cn('game-part__container-resource')}>
      //         <Resource resource={resource} />
      //       </div>
      //     ))}
      //   </div>
      // </div>
    );
  }
}
