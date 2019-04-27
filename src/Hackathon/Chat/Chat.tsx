import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Button from './Button';
import Message from './Message/Message';
const styles = require('./Chat.modules.scss');
const anonAvatar = require('config/img/anonymousAvatar.jpg');


const cn = classNames(styles);

export default class Chat extends React.Component {
  render() {
    const message = {
      text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      user: {
        nickname: 'Виталий',
        avatar: anonAvatar,
      }
    };

    return (
      <div className={cn('chat')}>
        <div className={cn('chat__messages')}>
          <Message message={message} />
          <Message message={message} />
          <Message message={message} />
          <Message message={message} isMine={true} />
          <Message message={message} isMine={true} />
          <Message message={message} />
          <Message message={message} />
          <Message message={message} isMine={true} />
          <Message message={message} isMine={true} />
        </div>
        <div className={cn('chat__footer')}>
          <textarea className={cn('chat__textarea')} />
          <Button className={cn('chat__button-container')} />
        </div>
      </div>
    );
  }
}
