import * as React from 'libs/Cheburact';

export default class Music extends React.Component {
  render() {
    return <embed src="./music" loop="false" hidden="true" autostart="true" />;
  }
}
