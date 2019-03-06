import * as React from 'libs/Cheburact';
import className from 'libs/classNames';
const styles = require('./PlayButton.modules.scss');

const cn = className(styles);

export default class PlayButton extends React.Component {
  render() {
    return (
        <div className={cn(
            'play-button',
            this.props.isStartPage && 'play-button_align',
            this.props.isSinglePlayer && 'play-button_single-pl',
            this.props.isMultiPlayer && 'play-button_multi-pl',
        )}>
        </div>
    );
  }
}