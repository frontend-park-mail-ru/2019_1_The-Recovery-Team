import LabelAuthUser from 'components/LabelAuthUser/index';
import * as React from 'libs/Cheburact/index';
import classNames from 'libs/classNames/index';
import { GameModes } from '../config';
import gameStore from '../store';
import { actionGameInit, actionGameStop } from '../store/actions';
import Resource from './Resource/index';
import Timer from './Timer/index';

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
      <div className={cn('game-part')}>
        <div className={cn('game-part__header')}>
          <div
            className={cn(
              'game-part__label-container',
              'game-part__label-container_left'
            )}
          >
            <LabelAuthUser user={this.state.user} reverse={true} />
          </div>
          <div className={cn('game-part__timer-container')}>
            <Timer />
          </div>
        </div>
        <div className={cn('game-part__resources')}>
          {this.state.resources.map(resource => (
            <div className={cn('game-part__container-resource')}>
              <Resource resource={resource} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
