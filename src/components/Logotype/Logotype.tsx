import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Logotype.modules.scss');
const cn = classNames(styles);

export default class Logotype extends React.Component {
  render() {
    const { size, className = '' } = this.props;
    const logotypeClasses = `${className} ${cn(
      'logotype',
      `logotype_${size}`
    )}`;

    return <div className={logotypeClasses} />;
  }
}
