import * as React from 'libs/Cheburact';
const styles = require('./App.modules.scss');

export default class App extends React.Component {
  render() {
    return (
        <h1 className={styles['app']}>
          Our cool Component
        </h1>
    );
  }
}
