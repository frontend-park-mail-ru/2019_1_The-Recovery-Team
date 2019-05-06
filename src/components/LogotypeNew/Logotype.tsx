import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Logotype.modules.scss');

const cn = classNames(styles);

export default class CircleButton extends React.Component {
  render() {
    const { className = '' } = this.props;
    const classes = `${className} ${cn('logotype')}`;

    return <div className={classes} />;
  }
}
