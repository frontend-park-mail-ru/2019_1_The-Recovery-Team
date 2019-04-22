import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./VolumeButton.modules.scss');

const cn = classNames(styles);

export default class VolumeButton extends React.Component {
  render() {
    const { on, onClick } = this.props;

    return (
      <button
        onClick={onClick}
        className={cn('volume-button', on && 'volume-button_on')}
      />
    );
  }
}
