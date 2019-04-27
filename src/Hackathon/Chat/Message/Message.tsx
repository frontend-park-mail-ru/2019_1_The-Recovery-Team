import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Message.modules.scss');

const cn = classNames(styles);

export default class Message extends React.Component {
  render() {
    const { text, className, isMine = false } = this.props;
    const classes = `${className} ${cn('message', isMine && 'message_mine')}`;

    return (
      <div className={classes}>
        <div className={cn('message__text', isMine && 'message__text_mine')}>
          {text}
        </div>
      </div>
    );
  }
}
