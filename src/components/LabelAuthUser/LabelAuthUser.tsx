import * as React from 'libs/Cheburact';
const styles = require('./LabelAuthUser.modules.scss');

export default class LabelAuthUser extends React.Component {
  render() {
    return (
        <a href='#' className={styles['label-auth']}>
          <div className={styles['label-auth__circle']}></div>
          <div className={styles['label-auth__rect']}>
            <div className={styles['label-auth__nickname']}>{this.props.nickname}</div>
          </div>
        </a>
    );
  }
}
