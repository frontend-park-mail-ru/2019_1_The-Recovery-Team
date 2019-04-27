import AvatarProfile from 'components/AvatarProfile';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Message.modules.scss');

const anonymousUser = {
  nickname: 'Аноним',
  avatar: require('config/img/anonymousAvatar.jpg'),
};

const cn = classNames(styles);

export default class Message extends React.Component {
  render() {

    const { text, isMine = false } = this.props;
    const user = this.props.user || anonymousUser;

    return (
      <div className={cn('message', isMine && 'message_mine')}>
        {!isMine ? (
          <AvatarProfile user={user} className={cn('message__avatar')} />
        ) : null}
        <div className={cn('message__text', isMine && 'message__text_mine')}>
          {!isMine && (
            <div className={cn('message__nickname')}>{user.nickname}</div>
          )}
          {text}
        </div>
      </div>
    );
  }
}
