import * as React from 'libs/Cheburact';
import className from 'libs/classNames';

const styles = require('./InOutButton.modules.scss');

const cn = className(styles);

export default class InOutButton extends React.Component {
  render() {
    const {isAuthenticated, onClick} = this.props;
    return (
        <a
            className={cn('in-out-button')}
            onClick={onClick}
        >
          <div className={cn('in-out-button__title')}>{
            isAuthenticated ? 'Выход' : 'Вход'
          }</div>
          <div className={cn(
              isAuthenticated
                  ? 'in-out-button__out-icon'
                  : 'in-out-button__in-icon')}
          />
        </a>
    );
  }
}
