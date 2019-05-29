import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./SimpleInput.modules.scss');

const cn = classNames(styles);

export default class SimpleInput extends React.Component {
  state = {
    active: false,
  };

  handleFocus = () => this.setState({ active: true });

  handleBlur = () => {
    this.setState({ active: false });
    this.props.onBlur();
  };

  handleInput = e => this.props.onChange(e.target.value || '');

  render() {
    const { placeholder, isError, value, type } = this.props;
    const { active } = this.state;

    return (
      <div
        className={cn(
          'simple-input',
          active && 'simple-input_active',
          isError && 'simple-input_error'
        )}
      >
        <input
          className={cn('simple-input__field')}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onInput={this.handleInput}
          value={value}
          type={type}
          spellcheck="false"
          autocomplete="new-password"
        />
        <div
          className={cn(
            'simple-input__label',
            (active || value.length) && 'simple-input__label_active',
            isError && 'simple-input__label_error'
          )}
        >
          {placeholder}
        </div>
      </div>
    );
  }
}
