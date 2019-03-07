import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Input.modules.scss');

const cn = classNames(styles);

export default class Input extends React.Component {
  render() {
    const {placeholder, isActive, isError} = this.props;

    return (
        <div className={cn('form-input-container')}>
          <input className={cn('form__input')} />
          <div className={cn(
              'form__input-label',
              isActive && 'form__input-label_active',
              isError && 'form__input-label_error'
          )
          }>{placeholder}</div>
        </div>
    );
  }
}
