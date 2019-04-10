import { CELL_SIZE } from 'game/config';
import gameStore, { gameStoreActions } from 'game/store';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import { Player } from 'game/config/models';
const styles = require('./PlayersLayer.modules.scss');

const cn = classNames(styles);

interface State {
  counter: 0;
}

// @ts-ignore
@connectToCheburstore
export default class PlayersLayer extends React.Component {
  refs = {};
  state: State = {
    counter: 0,
  };

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
      this.setState({ counter: this.state.counter + 1 });
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

    let xPos: any = (player.x * 2 + 1) / (colCount * 2 * CELL_SIZE);
    let yPos: any = (player.y * 2 + 1) / (rowCount * 2 * CELL_SIZE);

    xPos = `${Math.floor(xPos * 1000) / 10}%`;
    yPos = `${Math.floor(yPos * 1000) / 10}%`;

    ref.style.top = yPos;
    ref.style.left = xPos;
  };

  initPlayerRef = (id, ref: HTMLElement) => {
    this.updatePlayerPosition(id, ref);

    this.refs[id] = ref;
  };

  render() {
    const { myId } = this.props;
    const { players } = gameStore.select().state;

    return (
      <div className={cn('layer')}>
        {Object.values(players).map(player => (
          <div
            className={cn(
              'layer__player',
              player.id === myId
                ? 'layer__player_me'
                : 'layer__player_opponent',
              player.loseRound && 'layer__player_dead'
            )}
            ref={r => this.initPlayerRef(player.id, r)}
          />
        ))}
      </div>
    );
  }
}
