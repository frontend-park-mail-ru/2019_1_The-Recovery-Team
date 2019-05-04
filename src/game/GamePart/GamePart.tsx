import { routeCreators, routesMap } from 'config/routes';
import { GameModes } from 'game/config';
import gameStore from 'game/store';
import { gameStoreActions } from 'game/store/actions';
import * as React from 'libs/Cheburact/index';
import routerStore, { actionRouterPush, Route } from 'libs/Cheburouter';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import Arena from './Arena';
import FinishPage from './FinishPage';
import PausePage from './PausePage';
import { getIsMobile } from 'utils/checkIsMobile';

const styles = require('./GamePart.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class GamePart extends React.Component {
  root: HTMLElement | null = null;
  content: HTMLElement | null = null;

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
    // const {
    //   routerParams: { gameMode = GameModes.SINGLEPLAYER } = {},
    // } = this.props;
    //
    // routerStore.emit(
    //   actionRouterPush({
    //     path: routeCreators.TO_FINISH_PAGE(gameMode),
    //   })
    // );
  }

  public render() {
    return (
      <div className={cn('game-part')} ref={r => (this.root = r)}>
        <div className={cn('game-part__content')} ref={r => (this.content = r)}>
          <Route
            template={routesMap.GAME_PART.template}
            component={Arena}
            exact={true}
          />
          <Route
            template={routesMap.PAUSE_PAGE.template}
            component={PausePage}
          />
          <Route
            template={routesMap.FINISH_PAGE.template}
            component={FinishPage}
          />
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateContentBounds);
  }
}
