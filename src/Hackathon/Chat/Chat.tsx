import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Button from './Button';
import Message from './Message/Message';
const styles = require('./Chat.modules.scss');

const cn = classNames(styles);

export default class Chat extends React.Component {
  render() {
    const string = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    return (
      <div className={cn('chat')}>
        <div className={cn('chat__messages')}>
          <Message text={string} className={cn('chat__message')} />
          <Message
            text={string}
            className={cn('chat__message')}
            isMine={true}
          />
          <Message
            text={string}
            className={cn('chat__message')}
            isMine={true}
          />
          <Message
              text={string}
              className={cn('chat__message')}
              isMine={true}
          />
          <Message text={string} className={cn('chat__message')} />
          <Message text={string} className={cn('chat__message')} />
          <Message text={string} className={cn('chat__message')} />
          <Message text={string} className={cn('chat__message')} />
        </div>
        <div className={cn('chat__footer')}>
          <textarea className={cn('chat__textarea')} />
          <Button className={cn('chat__button-container')} />
        </div>
      </div>
    );
  }
}
