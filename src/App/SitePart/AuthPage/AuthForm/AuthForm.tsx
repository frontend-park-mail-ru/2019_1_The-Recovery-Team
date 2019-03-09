import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import {AuthPageMode} from '../config/modes';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
const styles = require('./AuthForm.modules.scss');

const cn = classNames(styles);

export default class AuthForm extends React.Component {
  render() {
    const { currentTab } = this.props;

    return (
        <div className={cn('auth-form')}>
          {currentTab === AuthPageMode.SIGN_IN && (<SignInForm/>)}
          {currentTab === AuthPageMode.SIGN_UP && (<SignUpForm/>)}
        </div>
    );
  }
}
