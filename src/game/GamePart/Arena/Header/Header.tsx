import LabelAuthUser from 'components/LabelAuthUser';
import gameStore from 'game/store';
import { gameStoreActions } from 'game/store/actions';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import Timer from './Timer';

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

  @onCheburevent(gameStore, gameStoreActions.SET_STATE_UPDATED)
  updatePlayers() {
    const { myId } = this.props;
    const { players } = gameStore.select().state;

    const me = players[myId] || null;
    let opponent: any = null;

    // TODO: Рассмотреть вариант, в котором больше двух игроков
    for (const id of Object.keys(players)) {
      if (id !== myId) {
        opponent = players[id];
        break;
      }
    }

    this.setState({
      me,
      opponent,
    });
  }

  render() {
    const { me, opponent } = this.props;

    return (
      <div className={cn('header')}>
        {me !== null && (
          <div className={cn('header__me')}>
            <LabelAuthUser
              user={{
                nickname: 'Me',
                avatar: '',
              }}
              reverse={true}
            />
          </div>
        )}
        <div className={cn('header__timer')}>
          <Timer />
        </div>
        {opponent !== null && (
          <div className={cn('header__opponent')}>
            <LabelAuthUser
              user={{
                nickname: 'Opponent',
                avatar: '',
              }}
            />
          </div>
        )}
      </div>
    );
  }
}
