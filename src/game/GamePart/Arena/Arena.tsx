import { GameModes } from 'game/config';
import ControllersManager from 'game/ControllersManager';
import gameStore, { actionGameInit, gameStoreActions } from 'game/store';
import { IControllersManager } from 'game/types';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore from 'store/userStore';
import Controllers from './Controllers';
import Field from './Field';
import Header from './Header';
import Resources from './Resources';
import SearchPage from './SearchPage';

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
    }
  }

  componentDidMount() {
    const { mode = GameModes.SINGLEPLAYER } = this.props;
    const { user: me } = userStore.select();

    gameStore.emit(
      actionGameInit({
        me,
        isOnline: !!(mode === GameModes.MULTIPLAYER && me),
        mode,
      })
    );

    this.controllersManager = new ControllersManager();
    this.controllersManager.connect();
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
    const { gameStarted, fieldWidth } = this.state;

    return (
      <div className={cn('arena')}>
        {!gameStarted && gameMode !== GameModes.SINGLEPLAYER && <SearchPage />}
        <Header onOpenInfo={onOpenInfo} mode={gameMode} width={fieldWidth} />
        <Field onWidthChanged={this.handleFieldWidthChanged} />
        <Resources />
        <Controllers manager={this.controllersManager} />
      </div>
    );
  }

  componentWillUnmount() {
    if (this.controllersManager) {
      this.controllersManager.disconnect();
    }
  }
}
