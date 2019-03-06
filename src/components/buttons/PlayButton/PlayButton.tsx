import * as React from 'libs/Cheburact';
import className from 'libs/classNames';
const styles = require('./PlayButton.modules.scss');

const cn = className(styles);

export default class PlayButton extends React.Component {
  render() {
    const {mode, className} = this.props;
    let classes = cn(
        'play-button',
        `play-button_${mode}`,
    );
    if (className) {
      classes = `${classes} ${className}`;
    }

    return (
        <div className={classes} />
    );
  }
}