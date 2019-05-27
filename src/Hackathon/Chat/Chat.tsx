import SimpleButton from 'components/SimpleButton/SimpleButton';
import chatStore, {
  actionChatInitGlobalMessages,
  ChatMessage,
  ChatSetGlobalMessagesPL,
  ChatSetSessionPL,
} from 'Hackathon/store';
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
  messagesRef: HTMLElement | null = null;

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
    const { messageIds, messages, users } = chatStore.select();
    const messageList = messageIds.map(id => messages[id]);
    this.setState({
      users,
      messages: messageList,
    });
  }

  handleScrollClick = () => {
    if (this.messagesRef) {
      this.messagesRef.scrollTo(
        0,
        this.messagesRef.scrollHeight - this.messagesRef.clientHeight
      );
    }
  };

  handleMessagesScroll = () => {
    if (!this.messagesRef) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = this.messagesRef;
    const isScrolled = scrollTop !== scrollHeight - clientHeight;

    if (this.state.isScrolled !== isScrolled) {
      this.setState({
        isScrolled,
      });
    }
  };

  componentDidMount() {
    chatStore.emit(actionChatInitialize());
    this.selectMe();
    this.handleMessagesUpdated();

    if (this.messagesRef) {
      this.messagesRef.addEventListener('scroll', this.handleMessagesScroll);
    }
  }

  handleLoadOld = () => {
    chatStore.emit(actionChatInitGlobalMessages());
  };

  @onCheburevent(chatStore, chatActions.SET_GLOBAL_MESSAGES)
  handleOldLoaded({ payload }: Action<ChatSetGlobalMessagesPL>) {
    this.setState({
      users: chatStore.select().users,
      messages: payload.messages,
    });
  }

  render() {
    const {
      currentMessage,
      messages,
      users,
      mySessionId,
      isScrolled,
    } = this.state;

    return (
      <div className={cn('chat')}>
        <div className={cn('chat__messages')} ref={r => (this.messagesRef = r)}>
          <div>
            <SimpleButton
              className={cn('leaders-page__load-button')}
              onClick={this.handleLoadOld}
              air={true}
            >
              Загрузить ещё
            </SimpleButton>
          </div>
          {messages.map((msg: ChatMessage) => (
            <Message
              user={users[msg.authorId as any] || null}
              text={msg.data.text}
              isMine={
                (userStore.select().user || ({} as any)).id === msg.authorId ||
                msg.sessionId === mySessionId
              }
              created={msg.created}
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
        {isScrolled && (
          <div
            className={cn('chat__scroll')}
            onClick={this.handleScrollClick}
          />
        )}
      </div>
    );
  }

  componentWillUnmount() {
    if (this.messagesRef) {
      this.messagesRef.removeEventListener('scroll', this.handleMessagesScroll);
    }
  }
}
