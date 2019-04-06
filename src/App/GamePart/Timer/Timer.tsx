import * as React from 'libs/Cheburact/index';
import classNames from 'libs/classNames/index';
const styles = require('./Timer.modules.scss');

const cn = classNames(styles);

export default class Timer extends React.Component {
  state = {
    roundNumber: 1,
    time: '0:16',
  };

  render() {
    const { roundNumber, time } = this.state;

    return (
      <div className={cn('timer')}>
        <div className={cn('timer__label')}>
          <div className={cn('timer__round')}>{`${roundNumber} раунд`}</div>
          <div className={cn('timer__time')}>{time}</div>
        </div>
        <div className={cn('timer__pause')}>
          <div className={cn('timer__stick')} />
          <div className={cn('timer__stick')} />
        </div>
      </div>
    );
  }
}
