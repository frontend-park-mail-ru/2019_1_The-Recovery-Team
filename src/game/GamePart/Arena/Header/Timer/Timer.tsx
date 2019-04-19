import { routeCreators } from 'config/routes';
import gameStore, { gameStoreActions } from 'game/store';
import * as React from 'libs/Cheburact/index';
import { Link } from 'libs/Cheburouter';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';

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
    const { withPauseButton = true, mode, timerClass = '' } = this.props;
    const timerClasses = `${timerClass} ${cn('timer')}`;

    return (
      <div className={timerClasses}>
        <div className={cn('timer__round')}>{`${roundNumber} раунд`}</div>
        <div className={cn('timer__time')}>{`00:0${roundTimer}`}</div>
        <div className={cn('timer__pause-container')}>
          <Link
            to={routeCreators.TO_PAUSE_PAGE(mode)}
            className={cn('timer__pause')}
          />
        </div>
      </div>
    );
  }
}
