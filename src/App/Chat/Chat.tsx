import isProd from 'config/isProd';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Chat.modules.scss');

const cn = classNames(styles);

const hackathonUrl = isProd
  ? 'https://hackathon.sadislands.ru'
  : 'http://localhost:9000';

export default class Chat extends React.Component {
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
        <div className={cn('chat__header')} onClick={this.toggle}>
          Чат
        </div>
        <div className={cn('chat__content', isOpen && 'chat__content_open')}>
          <iframe width="100%" height="100%" src={hackathonUrl} />
        </div>
      </div>
    );
  }
}
