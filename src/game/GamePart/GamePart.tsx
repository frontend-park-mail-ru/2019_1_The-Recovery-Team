import gameStore, { actionGameInit, actionGameStop } from 'game/store';
import { gameStoreActions } from 'game/store/actions';
import * as React from 'libs/Cheburact/index';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import { getIsMobile } from 'utils/checkIsMobile';
import { GameModes } from '../config';
import Arena from './Arena';
import { gamePageTypes } from './gamePageTypes';
import ModalWindow from './ModalWindow';
import userStore from 'store/userStore';

const styles = require('./GamePart.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class GamePart extends React.Component {
  root: HTMLElement | null = null;
  content: HTMLElement | null = null;

  state = {
    modalWindowType: null,
  };

  async componentDidMount() {
    await this.updateContentBounds().requestFullScreen();
    window.addEventListener('resize', this.updateContentBounds);
  }

  requestFullScreen = async (): Promise<GamePart> => {
    if (!this.root) {
      return this;
    }
    try {
      await this.root.requestFullscreen();
      // tslint:disable-next-line:no-console
      console.log('FULLSCREEN');
    } catch {
      // tslint:disable-next-line:no-console
      console.log('CAN NOT OPEN FULLSCREEN');
    }
    return this;
  };

  updateContentBounds = (): GamePart => {
    if (!this.content) {
      return this;
    }

    const isMobile = getIsMobile();
    if (!isMobile) {
      return this;
    }

    const { clientHeight, clientWidth } = window.document.body;
    const h = Math.min(clientHeight, clientWidth);
    const w = Math.max(clientWidth, clientHeight);

    this.content.style.width = `${w}px`;
    this.content.style.height = `${h}px`;

    return this;
  };

  @onCheburevent(gameStore, gameStoreActions.SET_GAME_OVER)
  handleGameOver() {
    const { id: myId = 0 } = gameStore.select().me || {};
    const { loseRound: isLose = false } =
      gameStore.select().state.players[myId] || {};

    this.setState({
      modalWindowType: !!isLose ? gamePageTypes.LOSE : gamePageTypes.WIN,
    });
  }

  @onCheburevent(gameStore, gameStoreActions.SET_OPPONENT_SEARCH)
  handleSearchModalWindow() {
    this.setState({
      modalWindowType: gamePageTypes.SEARCH,
    });
  }

  @onCheburevent(gameStore, gameStoreActions.SET_OPPONENT)
  handleCloseSearch() {
    this.setState({
      modalWindowType: null,
    });
  }

  onGiveUp = () => {
    gameStore.emit(actionGameStop());
    this.setState({
      modalWindowType: gamePageTypes.LOSE,
    });
  };

  onReload = () => {
    const {
      routerParams: { gameMode },
    } = this.props;
    gameStore.emit(
      actionGameInit({
        isOnline: gameMode === GameModes.MULTIPLAYER,
        mode: gameMode,
        me: userStore.select().user,
      })
    );
    this.setState({
      modalWindowType: null,
    });
  };

  toggleInfoState = () =>
    this.setState({ modalWindowType: gamePageTypes.INFO });

  onCloseModal = () => {
    this.setState({
      modalWindowType: null,
    });
  };

  public render() {
    const { modalWindowType } = this.state;
    const {
      routerParams: { gameMode },
    } = this.props;

    return (
      <div className={cn('game-part')} ref={r => (this.root = r)}>
        <div className={cn('game-part__content')} ref={r => (this.content = r)}>
          <Arena mode={gameMode} onOpenInfo={this.toggleInfoState} />
          <ModalWindow
            mode={gameMode}
            type={modalWindowType}
            onClose={this.onCloseModal}
            onGiveUp={this.onGiveUp}
            onReload={this.onReload}
          />
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateContentBounds);
  }
}
