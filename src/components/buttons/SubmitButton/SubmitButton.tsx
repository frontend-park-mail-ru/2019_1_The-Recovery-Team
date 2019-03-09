import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./SubmitButton.modules.scss');

const cn = classNames(styles);

export default class SubmitButton extends React.Component {
  render() {
    const {mode, onClick} = this.props;

    return (
        <button onClick={onClick} className={cn('submit-button', `submit-button_${mode.theme}`)}>
          <div className={cn('submit-button__container-icon')}>
            <div className={cn(`submit-button__${mode.className}`)} />
          </div>
            <div className={cn('submit-button__title')}>{mode.title}</div>
        </button>
    );
  }
}