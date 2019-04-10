import ControllersManager from 'game/ControllersManager';
import * as React from 'libs/Cheburact';
import { connectToCheburstore } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import Field from './Field';
import Header from './Header';
const styles = require('./Arena.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Arena extends React.Component {
  controllersManager: ControllersManager | null = null;
  componentDidMount() {
    this.controllersManager = new ControllersManager('1');
    this.controllersManager.connect();
  }

  render() {
    return (
      <div className={cn('arena')}>
        <Header myId={1} />
        <Field />
      </div>
    );
  }

  componentWillUnmount() {
    if (this.controllersManager) {
      this.controllersManager.disconnect();
    }
  }
}
