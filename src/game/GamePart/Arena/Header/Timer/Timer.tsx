import gameStore, { gameStoreActions } from 'game/store';
import * as React from 'libs/Cheburact/index';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames/index';
const styles = require('./Timer.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Timer extends React.Component {
  state = {
    roundNumber: '0',
    roundTimer: '0',
  };

  componentDidMount() {
    this.updateTimer();
  }

  @onCheburevent(gameStore, gameStoreActions.SET_STATE_UPDATED)
  updateTimer() {
    const { roundNumber, roundTimer } = gameStore.select().state;
    this.setState({
      roundNumber,
      roundTimer,
    });
  }

  render() {
    const { roundNumber, roundTimer } = this.state;

    return (
      <div className={cn('timer')}>
        <div className={cn('timer__label')}>
          <div className={cn('timer__round')}>{`${roundNumber} раунд`}</div>
          <div className={cn('timer__time')}>{`${roundTimer}`}</div>
        </div>
        <div className={cn('timer__pause')}>
          <div className={cn('timer__stick')} />
          <div className={cn('timer__stick')} />
        </div>
      </div>
    );
  }
}
