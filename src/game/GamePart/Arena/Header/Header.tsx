import gameStore from 'game/store';
import { gameStoreActions } from 'game/store/actions';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import PlayerLabel from './PlayerLabel';
import Timer from './Timer';

const styles = require('./Header.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Header extends React.Component {
  containerRef: HTMLElement | null = null;

  state = {
    me: null,
    opponent: null,
  };

  componentDidMount() {
    this.updatePlayers();
    this.updateWidth();
  }

  componentDidUpdate() {
    this.updateWidth();
  }

  @onCheburevent(gameStore, gameStoreActions.SET_OPPONENT)
  handleSetOpponent() {
    const { opponent } = gameStore.select();

    this.setState({ opponent });
  }

  @onCheburevent(gameStore, gameStoreActions.SET_STATE_UPDATED)
  updatePlayers() {
    const { me, opponent } = gameStore.select();

    this.setState({
      me,
      opponent,
    });
  }

  updateWidth = () => {
    const { width } = this.props;
    if (this.containerRef && width) {
      this.containerRef.style.width = `${width}px`;
    }
  };

  render() {
    const { mode, onOpenInfo } = this.props;
    const { me = null, opponent = null } = this.state;

    return (
      <div className={cn('header')} ref={r => (this.containerRef = r)}>
        <div className={cn('header__me')}>
          <PlayerLabel user={me} />
        </div>
        <div className={cn('header__timer')}>
          <Timer mode={mode} onOpenInfo={onOpenInfo} />
        </div>
        <PlayerLabel user={opponent} isEnemy={true} />
      </div>
    );
  }
}
