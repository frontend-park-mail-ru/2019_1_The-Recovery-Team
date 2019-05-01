import * as React from 'libs/Cheburact';

import classNames from 'libs/classNames';

const styles = require('./SideBar.modules.scss');

const cn = classNames(styles);

export default class SideBar extends React.Component {
  render() {
    const { isOpen, onClose = () => null } = this.props;

    return (
      <div
        className={cn(
          'side-bar__container',
          isOpen && 'side-bar__container_open'
        )}
        onClick={onClose}
      >
        <div className={cn('side-bar', isOpen && 'side-bar_open')} />
      </div>
    );
  }
}
