import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Button.modules.scss');

const cn = classNames(styles);

export default class Button extends React.Component {
  render() {
    const { className } = this.props;
    const classes = `${className} ${cn('button')}`;

    return <div className={classes} />;
  }
}
