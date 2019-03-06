import * as React from 'libs/Cheburact';
const styles = require('./VolumeButton.modules.scss');

export default class VolumeButton extends React.Component {
  render() {
    return (
        <button className={`${styles['volume-button']} ${styles['volume-button_on']}`}>
        </button>
    );
  }
}
