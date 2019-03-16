import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const styles = require('./Tab.modules.scss');

const cn = classNames(styles);

export default class Tab extends React.Component {
  render() {
    const { isActive, children, onClick } = this.props;
    return (
      <a
        className={cn('tabbar__tab', isActive && 'tabbar__tab_active')}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
}
