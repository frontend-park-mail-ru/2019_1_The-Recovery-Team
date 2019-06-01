import { GameModes } from 'game/config';
import ControllersManager from 'game/ControllersManager';
import gameStore, { gameStoreActions } from 'game/store';
import { IControllersManager } from 'game/types';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import Controllers from './Controllers';
import Field from './Field';
import Header from './Header';
import Resources from './Resources';

const styles = require('./Arena.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Arena extends React.Component {
  controllersManager: IControllersManager | null = null;

  state = {
    gameStarted: false,
    fieldWidth: null,
  };

  @onCheburevent(gameStore, gameStoreActions.SET_STATE_UPDATED)
  handleGameChanged() {
    if (!this.state.gameStarted) {
      this.setState({ gameStarted: true });
      if (!this.controllersManager) {
        this.controllersManager = new ControllersManager();
      }
      this.controllersManager.connect();
    }
  }

  @onCheburevent(gameStore, gameStoreActions.SET_GAME_OVER)
  handleGameOver() {
    this.setState({
      gameStarted: false,
    });
    this.disconnectManager();
  }

  disconnectManager() {
    if (this.controllersManager) {
      this.controllersManager.disconnect();
    }
  }

  handleFieldWidthChanged = fieldWidth =>
    this.setState({
      fieldWidth,
    });

  render() {
    const {
      routerParams: { gameMode = GameModes.SINGLEPLAYER } = {},
      onOpenInfo,
    } = this.props;
    const { fieldWidth } = this.state;

    return (
      <div className={cn('arena')}>
        <Header onOpenInfo={onOpenInfo} mode={gameMode} width={fieldWidth} />
        <Field onWidthChanged={this.handleFieldWidthChanged} />
        <Resources />
        <Controllers manager={this.controllersManager} />
      </div>
    );
  }

  componentWillUnmount() {
    this.disconnectManager();
  }
}
