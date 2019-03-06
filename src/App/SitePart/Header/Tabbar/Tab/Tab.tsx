import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const styles = require('./Tab.modules.scss');

const cn = classNames(styles);

export default class Tab extends React.Component {
  render() {
    return (
        <a className={cn('tabbar__tab', this.props.isActive && 'tabbar__tab_active')}>{this.props.title}</a>
    );
  }
}
