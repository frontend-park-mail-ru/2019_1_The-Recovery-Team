import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./SubmitButton.modules.scss');

const cn = classNames(styles);

export default class SubmitButton extends React.Component {
  render() {
    const {mode, onClick, disabled} = this.props;

    console.log(this.props, 'button');

    return (
        <button onClick={!disabled && onClick} className={cn(
            'submit-button',
            `submit-button_${mode.theme}`,
            disabled && 'submit-button_disabled',
        )}>
          <div className={cn('submit-button__container-icon')}>
            <div className={cn(`submit-button__${mode.className}`)} />
          </div>
            <div className={cn('submit-button__title')}>{mode.title}</div>
        </button>
    );
  }
}