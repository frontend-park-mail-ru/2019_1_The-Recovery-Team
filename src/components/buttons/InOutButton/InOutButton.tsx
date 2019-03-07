import * as React from 'libs/Cheburact';
import className from 'libs/classNames';
const styles = require('./InOutButton.modules.scss');

const cn = className(styles);

export default class InOutButton extends React.Component {
  render() {
    const {inOutMode} = this.props;
    return (
        <a href='#' className={cn('in-out-button')}>
          <div className={cn('in-out-button__title')}>{inOutMode.title}</div>
          <div className={cn(`in-out-button__${inOutMode.className}-icon`)} />
        </a>
    );
  }
}
