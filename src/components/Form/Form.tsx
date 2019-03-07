import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Input from 'components/Form/Input/Input';
const styles = require('./Form.modules.scss');

const cn = classNames(styles);

export default class Form extends React.Component {
  render() {
    const { inputs } = this.props;

    return (
        <div className={cn('form')}>
          <div className={cn('form__container-inputs')}>
          {
            inputs.map(({placeholder, textError, isActive, isError}) => (
                <div className={cn('form__input-container')}>
                  <Input
                      placeholder={placeholder}
                      textError={textError}
                      isActive={isActive}
                      isError={isError}
                  />
                </div>
            ))
          }
          </div>
        </div>
    );
  }
}
