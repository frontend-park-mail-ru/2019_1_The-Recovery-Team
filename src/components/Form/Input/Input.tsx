import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Input.modules.scss');

const cn = classNames(styles);

export default class Input extends React.Component {
  state = {
    active: false,
    value: this.props.value || '',
  };

  handleFocus = () => this.setState({ active: true });
  handleBlur = () => this.setState({ active: false });

  handleInput = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value);
  };

  render() {
    const {placeholder, isError} = this.props;
    const {active, value} = this.state;

    return (
        <div className={cn('form-input-container')}>
          <input
              className={cn('input')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onInput={this.handleInput}
              value={value}
          />
          <div className={cn(
              'input-label',
              (active || value.length) && 'input-label_active',
              isError && 'input-label_error'
          )
          }>{placeholder}</div>
        </div>
    );
  }
}
