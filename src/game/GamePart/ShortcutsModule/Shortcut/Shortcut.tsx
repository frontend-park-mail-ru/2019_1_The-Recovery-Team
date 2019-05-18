import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Shortcut.modules.scss');

const cn = classNames(styles);

export default class Shortcut extends React.Component {
  render() {
    const { obj, title, type } = this.props;

    const classType = type ? cn(`shortcut__button_${type}`) : '';

    return (
      <div className={cn('shortcut')}>
        <div className={cn('shortcut__button', classType)}>{obj}</div>
        {title ? <div className={cn('shortcut__title')}>{title}</div> : null}
      </div>
    );
  }
}
