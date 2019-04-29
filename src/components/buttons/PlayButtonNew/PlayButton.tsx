import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { Link } from 'libs/Cheburouter';
const styles = require('./PlayButton.modules.scss');

const cn = classNames(styles);

export default class PlayButton extends React.Component {
  render() {
    const { className = '', type, to = null } = this.props;
    const classes = `${className} ${cn('play-button', `play-button_${type}`)}`;

    return <Link to={to} className={classes} />;
  }
}
