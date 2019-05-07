import gameStore, {
  actionGameInit,
  actionGameStop,
  GameOverPL,
} from 'game/store';
import { gameStoreActions } from 'game/store/actions';
import * as React from 'libs/Cheburact/index';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore from 'store/userStore';
import { getIsMobile } from 'utils/checkIsMobile';
import { GameModes } from '../config';
import Arena from './Arena';
import { gamePageTypes } from './gamePageTypes';
import ModalWindow from './ModalWindow';

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
  handleGameOver(action: Action<GameOverPL>) {
    this.setState({
      modalWindowType: !!action.payload.loseRound
        ? gamePageTypes.LOSE
        : gamePageTypes.WIN,
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

  handleGiveUp = () => {
    gameStore.emit(actionGameStop());
    this.setState({
      modalWindowType: gamePageTypes.LOSE,
    });
  };

  handleReload = () => {
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

  toInfoState = () => this.setState({ modalWindowType: gamePageTypes.INFO });

  handleCloseModal = () => {
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
          <Arena mode={gameMode} onOpenInfo={this.toInfoState} />
          <ModalWindow
            mode={gameMode}
            type={modalWindowType}
            onClose={this.handleCloseModal}
            onGiveUp={this.handleGiveUp}
            onReload={this.handleReload}
          />
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateContentBounds);
  }
}
