import chatStore, { ChatMessage } from 'Hackathon/store';
import {
  actionChatInitialize,
  actionChatInitMessage,
  chatActions,
} from 'Hackathon/store';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import userStore, { userActions } from 'store/userStore';
import Button from './Button';
import Message from './Message/Message';

const styles = require('./Chat.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Chat extends React.Component {
  state = {
    messages: [],
    users: {},
    currentMessage: '',
    myId: null,
  };
  textareaRef: HTMLTextAreaElement | null = null;

  handleTypedMessage = e => {
    this.setState({ currentMessage: e.target.value });
  };

  handleSendMessage = () => {
    const { currentMessage } = this.state;

    if (currentMessage.trim() !== '') {
      chatStore.emit(
        actionChatInitMessage({
          data: {
            text: currentMessage,
          },
          toId: null, // сейчас шлем всем
        })
      );
      this.setState({ currentMessage: '' });
      if (this.textareaRef) {
        this.textareaRef.value = '';
      }
    }
  };

  selectMe() {
    const { user } = userStore.select();
    if (!user) {
      this.setState({
        myId: null,
      });
    } else {
      this.setState({
        myId: user.id,
      });
    }
  }

  @onCheburevent(userStore, userActions.LOGOUT_SUCCESS)
  handleUserLogout() {
    this.selectMe();
  }

  @onCheburevent(userStore, userActions.UPDATE_SUCCESS)
  handleUserUpdated() {
    this.selectMe();
  }

  @onCheburevent(chatStore, chatActions.SET_MESSAGE)
  handleMessagesUpdated() {
    const { messageIds, messages, users } = chatStore.select();
    const messageList = messageIds.map(id => messages[id]);
    this.setState({
      users,
      messages: messageList,
    });
  }

  componentDidMount() {
    chatStore.emit(actionChatInitialize());
    this.selectMe();
    this.handleMessagesUpdated();
  }

  render() {
    const { currentMessage, messages, myId, users } = this.state;

    return (
      <div className={cn('chat')}>
        <div className={cn('chat__messages')}>
          {messages.map((msg: ChatMessage) => (
            <Message
              user={users[msg.authorId as any] || null}
              key={msg.messageId}
              text={msg.data.text}
              isMine={msg.authorId === myId}
              className={cn('chat__message')}
            />
          ))}
        </div>
        <div className={cn('chat__footer')}>
          <textarea
            placeholder="Введите ваше сообщение"
            ref={r => (this.textareaRef = r)}
            onInput={this.handleTypedMessage}
            className={cn('chat__textarea')}
            value={currentMessage}
          />
          <Button
            className={cn('chat__button-container')}
            onClick={this.handleSendMessage}
          />
        </div>
      </div>
    );
  }
}
