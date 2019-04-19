import Input from 'components/Form/Input/Input';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Form.modules.scss');

const cn = classNames(styles);

export default class Form extends React.Component {
  handleChange = (name, value) => this.props.onChangeValue(name, value);
  handleBlur = name => this.props.onBlur(name);

  render() {
    const { inputs, formClass = '' } = this.props;
    const formClasses = `${formClass} ${cn('form')}`;

    return (
      <div className={formClasses}>
        <div className={cn('form__container-inputs')}>
          {inputs.map(
            ({
              placeholder,
              isError,
              value,
              name,
              type,
              currentPlaceholder = null,
            }) => (
              <div className={cn('form__input-container')}>
                <Input
                  type={type}
                  placeholder={currentPlaceholder || placeholder}
                  isError={isError}
                  value={value}
                  onChange={value => this.handleChange(name, value)}
                  onBlur={() => this.handleBlur(name)}
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
