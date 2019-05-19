import CircleButton from 'components/buttons/CircleButton/CircleButton';
import { circleButtonTypes } from 'components/buttons/CircleButton/modes';
import isProd from 'config/isProd';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./ChatContainer.modules.scss');

const cn = classNames(styles);

const hackathonUrl = isProd
  ? 'https://hackathon.sadislands.ru'
  : 'http://localhost:9000';

export default class ChatContainer extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={cn('chat')}>
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
        />
        <div className={cn('chat__content', isOpen && 'chat__content_open')}>
          <iframe
            className={cn('chat__iframe')}
            width="100%"
            height="400px"
            src={hackathonUrl}
          />
        </div>
      </div>
    );
  }
}
