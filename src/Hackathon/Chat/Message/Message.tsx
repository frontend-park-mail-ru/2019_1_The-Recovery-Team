import AvatarProfile from 'components/AvatarProfile';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Message.modules.scss');
const anonAvatar = require('config/img/anonymousAvatar.jpg');

const cn = classNames(styles);

export default class Message extends React.Component {
  render() {
    const anonimUser = {
      nickname: 'Аноним',
      anonAvatar,
    }
    const { user = anonimUser, text, isMine = false } = this.props;
   

    return (
      <div className={cn('message', isMine && 'message_mine')}>
        {!isMine ? (
          <AvatarProfile user={user} className={cn('message__avatar')} />
        ) : null}
        <div className={cn('message__text', isMine && 'message__text_mine')}>
          {!isMine && (<div className={cn('message__nickname')}>{user.nickname}</div>)}
          {text}
        </div>
      </div>
    );
  }
}