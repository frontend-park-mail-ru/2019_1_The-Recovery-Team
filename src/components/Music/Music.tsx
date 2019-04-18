import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Music.modules.scss');

const cn = classNames(styles);

export default class Music extends React.Component {
  render() {
    return (
      <embed
        src="./music"
        loop="false"
        hidden="true"
        autostart="true"
      />
    );
  }
}