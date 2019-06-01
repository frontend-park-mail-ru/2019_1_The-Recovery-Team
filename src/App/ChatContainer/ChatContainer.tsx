import CircleButton from 'components/buttons/CircleButton/CircleButton';
import {
  circleButtonStyles,
  circleButtonTypes,
} from 'components/buttons/CircleButton/modes';
import isProd from 'config/isProd';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./ChatContainer.modules.scss');

const cn = classNames(styles);

const hackathonUrl = isProd
  ? 'https://hackathon.sadislands.ru'
  : 'http://localhost:9000';

export default class ChatContainer extends React.Component {
  containerRef: HTMLElement | null = null;

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  registerContainerRef = r => {
    this.containerRef = r;
    const iframe = document.createElement('iframe');
    r.appendChild(iframe);
    iframe.src = hackathonUrl;
    iframe.width = '100%';
    iframe.height = '100%';
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={cn('chat', isOpen && 'chat_open')}>
        <div
          className={cn('chat__header', isOpen && 'chat__header_open')}
          onClick={this.toggle}
        >
          Чат
        </div>
        <CircleButton
          className={cn('chat__icon', isOpen && 'chat__icon_open')}
          type={circleButtonTypes.CHAT}
          onClick={this.toggle}
          style={circleButtonStyles.BLUE_FILL}
        />
        <div
          className={cn('chat__content', isOpen && 'chat__content_open')}
          ref={this.registerContainerRef}
        />
      </div>
    );
  }
}
