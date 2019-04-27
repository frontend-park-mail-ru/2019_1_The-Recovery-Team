import chatStore, { ChatMessage, ChatSetSessionPL } from 'Hackathon/store';
import {
  actionChatInitialize,
  actionChatInitMessage,
  chatActions,
} from 'Hackathon/store';
import * as React from 'libs/Cheburact';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
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
    mySessionId: null,
    isScrolled: false,
  };
  textareaRef: HTMLTextAreaElement | null = null;
  messagesRef: HTMLTextAreaElement | null = null;

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
    const { mySessionId } = chatStore.select();
    console.log('ne:', user);
    if (!user) {
      this.setState({
        mySessionId,
        myId: null,
      });
    } else {
      this.setState({
        mySessionId,
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

  @onCheburevent(chatStore, chatActions.SET_SESSION)
  handleSetSession(action: Action<ChatSetSessionPL>) {
    this.setState({
      mySessionId: action.payload.sessionId,
    });
  }

  @onCheburevent(chatStore, chatActions.SET_MESSAGE)
  handleMessagesUpdated() {
    console.log(this.state);
    const { messageIds, messages, users } = chatStore.select();
    const messageList = messageIds.map(id => messages[id]);
    this.setState({
      users,
      messages: messageList,
    });
    console.log(userStore.select());
  }

  componentDidMount() {
    chatStore.emit(actionChatInitialize());
    this.selectMe();
    this.handleMessagesUpdated();
    this.messagesRef.addEventListener('scroll', () =>
      this.messagesRef.scrollTop !== 0
        ? (this.state.isScrolled = true)
        : (this.state.isScrolled = false)
    );
  }

  render() {
    const { currentMessage, messages, users, mySessionId, myId } = this.state;

    return (
      <div className={cn('chat')}>
        <div className={cn('chat__messages')} ref={r => (this.messagesRef = r)}>
          {messages.map((msg: ChatMessage) => (
            <Message
              user={users[msg.authorId as any] || null}
              key={msg.messageId}
              text={msg.data.text}
              isMine={
                myId ? myId === msg.authorId : msg.sessionId === mySessionId
              }
              created={msg.created}
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
        <div className={cn('chat__new-message')}>Новое сообщение</div>
      </div>
    );
  }
}
