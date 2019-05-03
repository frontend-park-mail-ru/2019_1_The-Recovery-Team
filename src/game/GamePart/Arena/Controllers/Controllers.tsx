import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const styles = require('./Controllers.modules.scss');
const cn = classNames(styles);

export default class Controllers extends React.Component {
  moveRight = () => this.props.manager.emitRight();
  moveLeft = () => this.props.manager.emitLeft();
  moveUp = () => this.props.manager.emitUp();
  moveDown = () => this.props.manager.emitDown();

  render() {
    return (
      <div className={cn('controllers')}>
        <div
          onClick={this.moveUp}
          className={cn('controllers__button', 'controllers__button_up')}
        />
        <div
          onClick={this.moveLeft}
          className={cn('controllers__button', 'controllers__button_left')}
        />
        <div
          onClick={this.moveDown}
          className={cn('controllers__button', 'controllers__button_down')}
        />
        <div
          onClick={this.moveRight}
          className={cn('controllers__button', 'controllers__button_right')}
        />
      </div>
    );
  }
}
