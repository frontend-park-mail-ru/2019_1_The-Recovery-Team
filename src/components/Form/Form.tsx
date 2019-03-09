import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Input from 'components/Form/Input/Input';
const styles = require('./Form.modules.scss');

const cn = classNames(styles);

export default class Form extends React.Component {

  componentDidMount() {
    console.log('mount', this.props, this.state);
  }

  componentDidUpdate() {
    console.log('update', this.props, this.state);
  }

  render() {
    console.log(this.props, this.state);
    const { inputs } = this.props;

    return (
        <div className={cn('form')}>
          <div className={cn('form__container-inputs')}>
          {
            inputs.map(({placeholder, isError, value}) => (
                <div className={cn('form__input-container')}>
                  <Input
                      placeholder={placeholder}
                      isError={isError}
                      value={value}
                  />
                </div>
            ))
          }
          </div>
        </div>
    );
  }
}
