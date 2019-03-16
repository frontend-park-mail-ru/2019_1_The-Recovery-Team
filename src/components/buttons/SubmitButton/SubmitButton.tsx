import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./SubmitButton.modules.scss');

const cn = classNames(styles);

export default class SubmitButton extends React.Component {
  render() {
    const { mode, onClick, disabled, children } = this.props;

    return (
      <button
        onClick={!disabled && onClick}
        className={cn(
          'submit-button',
          `submit-button_${mode.theme}`,
          disabled && 'submit-button_disabled'
        )}
      >
        <div className={cn('submit-button__container-icon')}>
          <div className={cn(`submit-button__${mode.className}`)} />
        </div>
        <div className={cn('submit-button__title')}>{children}</div>
      </button>
    );
  }
}
