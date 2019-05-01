import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
const styles = require('./PlayButton.modules.scss');

const cn = classNames(styles);

export default class PlayButton extends React.Component {
  render() {
    const { className = '', type, to = null } = this.props;
    const classes = `${className} ${cn('play-button', `play-button_${type}`)}`;

    return <Link to={to} className={classes} />;
  }
}
