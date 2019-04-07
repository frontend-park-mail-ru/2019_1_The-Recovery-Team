import * as React from 'libs/Cheburact';
import { connectToCheburstore } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import Header from './Header';
const styles = require('./Arena.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Arena extends React.Component {
  render() {
    return (
      <div className={cn('arena')}>
        <Header myId={1} />
      </div>
    );
  }
}
