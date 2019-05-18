import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./ModalWindow.modules.scss');

const cn = classNames(styles);

export default class ModalWindow extends React.Component {
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleClickContent = e => {
    e.stopPropagation();
  };

  render() {
    const { onClose, children } = this.props;
    return (
      <div className={cn('modal-window')} onClick={onClose}>
        <div className={cn('modal-window__content')} onClick={this.handleClickContent}>
          <button
            onClick={onClose}
            className={cn('modal-window__exit-button')}
          />
          {children}
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
}
