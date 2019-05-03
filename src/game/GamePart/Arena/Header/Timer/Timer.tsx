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
    const { withPauseButton = true, mode, className = '' } = this.props;

    const time = Number(roundTimer);
    const timeOk = time === 3;
    const warning = time === 2;
    const dangerous = time < 2;

    const timerClasses = `${className} ${cn(
      'timer',
      timeOk && 'timer_time-ok',
      warning && 'timer_warning',
      dangerous && 'timer_dangerous'
    )}`;

    return (
      <div className={timerClasses}>
        <div className={cn('timer__round')}>{`${roundNumber} раунд`}</div>
        <div className={cn('timer__time')}>{`00:0${roundTimer}`}</div>
        <div className={cn('timer__pause-container')}>
          {withPauseButton && (
            <Link
              to={routeCreators.TO_PAUSE_PAGE(mode)}
              className={cn('timer__pause')}
            />
          )}
        </div>
      </div>
    );
  }
}
