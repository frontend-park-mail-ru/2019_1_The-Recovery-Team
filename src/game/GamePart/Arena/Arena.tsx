import { GameModes } from 'game/config';
import ControllersManager from 'game/ControllersManager';
import gameStore, { actionGameInit } from 'game/store';
import * as React from 'libs/Cheburact';
import { connectToCheburstore } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore from 'store/userStore';
import Field from './Field';
import Header from './Header';

const styles = require('./Arena.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Arena extends React.Component {
  controllersManager: ControllersManager | null = null;

  componentDidMount() {
    const {
      routerParams: { gameMode = GameModes.SINGLEPLAYER } = {},
    } = this.props;
    const me = userStore.select().user;
    gameStore.emit(
      actionGameInit({
        me,
        isOnline: false,
        mode: gameMode,
      })
    );
    this.controllersManager = new ControllersManager('1');
    this.controllersManager.connect();
  }

  render() {
    const {
      routerParams: { gameMode = GameModes.SINGLEPLAYER } = {},
    } = this.props;

    return (
      <div className={cn('arena')}>
        <Header mode={gameMode} myId={1} />
        <Field />
      </div>
    );
  }

  componentWillUnmount() {
    if (this.controllersManager) {
      this.controllersManager.disconnect();
    }
  }
}
