import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Input.modules.scss');

const cn = classNames(styles);

export default class Input extends React.Component {
  _input: null | HTMLElement;

  state = {
    active: false,
  };

  handleFocus = () => {
    this.setState({ active: true });
    console.log('Input', this._input);
    if (this._input) {
      this._input.focus();
    }
  };
  handleBlur = () => this.setState({ active: false });

  render() {
    const {placeholder, isError} = this.props;
    const {active} = this.state;

    return (
        <div className={cn('form-input-container')}>
          <input
              className={cn('input')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              ref={(inp) => this._input = inp}
          />
          <div className={cn(
              'input-label',
              active && 'input-label_active',
              isError && 'input-label_error'
          )
          }>{placeholder}</div>
        </div>
    );
  }
}
