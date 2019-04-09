import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./GameButton.modules.scss');

const cn = classNames(styles);

export default class GameButton extends React.Component {
  render() {
    const { type } = this.props;

    return (
      <div className={cn('game-button', `game-button_${type}`)}>
      </div>
    );
  }
}
