import { Player } from 'game/config/models';
import gameStore, { gameStoreActions } from 'game/store';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import { setPlayerClasses, setPlayerPosition } from './utils';
const styles = require('./PlayersLayer.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class PlayersLayer extends React.Component {
  refs = {};

  prevPlayers: { [id: string]: Player } = {};

  @onCheburevent(gameStore, gameStoreActions.SET_STATE)
  handleInitPlayers() {
    const { players } = gameStore.select().state;

    let shouldRerender = false;
    for (const id of Object.keys(players)) {
      if (!this.prevPlayers[id]) {
        shouldRerender = true;
        break;
      }
      const { loseRound } = this.prevPlayers[id];
      if (loseRound !== players[id].loseRound) {
        shouldRerender = true;
        break;
      }
    }

    for (const id of Object.keys(players)) {
      if (this.refs[id]) {
        this.updatePlayerPosition(id, this.refs[id]);
      }
    }

    this.prevPlayers = players;
    if (shouldRerender) {
      this.setState({});
    }
  }

  @onCheburevent(gameStore, gameStoreActions.SET_STATE_UPDATED)
  handleUpdatePlayers() {
    this.handleInitPlayers();
  }

  componentDidMount() {
    this.handleInitPlayers();
  }

  updatePlayerPosition = (id, ref: HTMLElement) => {
    const { players } = gameStore.select().state;
    const player = players[id];

    const {
      width: colCount,
      height: rowCount,
    } = gameStore.select().state.field;

    setPlayerPosition(ref, colCount, rowCount, player.x, player.y);

    setPlayerClasses(ref, true, player.x, player.y, !!player.loseRound);
  };

  initPlayerRef = (id, ref: HTMLElement) => {
    this.updatePlayerPosition(id, ref);

    this.refs[id] = ref;
  };

  render() {
    const { players } = gameStore.select().state;

    return (
      <div className={cn('layer')}>
        {Object.values(players).map(player => (
          <div ref={r => this.initPlayerRef(player.id, r)} />
        ))}
      </div>
    );
  }
}
