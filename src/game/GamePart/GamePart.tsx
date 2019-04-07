import { actionGameInit, actionGameStop } from 'game/store/actions';
import * as React from 'libs/Cheburact/index';
import { GameModes } from '../config';
import gameStore from '../store';
import Arena from './Arena/Arena';

export default class GamePart extends React.Component {
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
    return <Arena />;
  }
}
