import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Logotype.modules.scss');
const cn = classNames(styles);

export default class Logotype extends React.Component {
  render() {
    const {size} = this.props;

    return (
        <div
          className={cn(
              'logotype',
              `logotype_${size}`,
          )}
        />
    );
  }
}
