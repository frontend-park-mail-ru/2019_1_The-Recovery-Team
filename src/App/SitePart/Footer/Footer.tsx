import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Footer.modules.scss');

const cn = classNames(styles);

export default class Footer extends React.Component {
  render() {
    return <div className={cn('footer')} />;
  }
}
