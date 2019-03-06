import * as React from 'libs/Cheburact';
const styles = require('./Tab.modules.scss');

export default class Tab extends React.Component {
  render() {
    return (
        <a className={styles['tabbar__tab']}>{this.props.title}</a>
    );
  }
}
