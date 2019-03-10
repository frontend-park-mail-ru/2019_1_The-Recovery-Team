import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./ModalWindow.modules.scss');

const cn = classNames(styles);

export default class ModalWindow extends React.Component {
  render() {
    const { onClose, children } = this.props;
    return (
        <div className={cn('modal-window')}>
          <div className={cn('modal-window__content')}>
              <button onClick={onClose} className={cn('modal-window__exit-button')} />
              {children}
          </div>
        </div>
    );
  }
}