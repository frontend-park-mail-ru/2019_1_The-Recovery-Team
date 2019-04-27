import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Button from './Button';
const styles = require('./Chat.modules.scss');

const cn = classNames(styles);

export default class Chat extends React.Component {
  render() {
    return (
      <div className={cn('chat')}>
        <div className={cn('chat__messages')} />
        <div className={cn('chat__footer')}>
          <textarea className={cn('chat__textarea')} />
          <Button className={cn('chat__button-container')} />
        </div>
      </div>
    );
  }
}
