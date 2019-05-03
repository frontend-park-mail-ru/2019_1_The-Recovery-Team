import gameStore from 'game/store';
import { gameStoreActions } from 'game/store/actions';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import Timer from './Timer';
import PlayerLabel from './PlayerLabel';

const styles = require('./Header.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Header extends React.Component {
  state = {
    me: null,
    opponent: null,
  };

  componentDidMount() {
    this.updatePlayers();
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

  render() {
    const { mode } = this.props;
    const { me = null, opponent = null } = this.state;

    return (
      <div className={cn('header')}>
        <div className={cn('header__me')}>
          <PlayerLabel user={me} />
        </div>
        <div className={cn('header__timer')}>
          <Timer mode={mode} />
        </div>
        <PlayerLabel user={opponent} isEnemy={true} />
      </div>
    );
  }
}
