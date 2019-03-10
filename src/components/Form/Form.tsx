import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Input from 'components/Form/Input/Input';
const styles = require('./Form.modules.scss');

const cn = classNames(styles);

export default class Form extends React.Component {
  handleChange = (name, value) => this.props.onChangeValue(name, value);
  handleBlur = (name) => this.props.onBlur(name);

  render() {
    const { inputs } = this.props;

    return (
        <div className={cn('form')}>
          <div className={cn('form__container-inputs')}>
          {
            inputs.map(({placeholder, isError, value, name}) => (
                <div className={cn('form__input-container')}>
                  <Input
                      placeholder={placeholder}
                      isError={isError}
                      value={value}
                      onChange={(value) => this.handleChange(name, value)}
                      onBlur={() => this.handleBlur(name)}
                  />
                </div>
            ))
          }
          </div>
        </div>
    );
  }
}
