import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./PlayButton.modules.scss');

const cn = classNames(styles);

export default class PlayButton extends React.Component {
  render() {
    const { mode, className, to } = this.props;
    let classes = cn('play-button', `play-button_${mode}`);
    if (className) {
      classes = `${classes} ${className}`;
    }

    if (!to) {
      return <div className={classes} />;
    }
    return <Link className={classes} to={to} />;
  }
}
