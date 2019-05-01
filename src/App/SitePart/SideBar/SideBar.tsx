import * as React from 'libs/Cheburact';

import classNames from 'libs/classNames';

const styles = require('./SideBar.modules.scss');

const cn = classNames(styles);

export default class SideBar extends React.Component {

  render() {
    const { isOpen } = this.props;

    return <div className={cn('side-bar', isOpen && 'side-bar_open')} />;
  }
}
