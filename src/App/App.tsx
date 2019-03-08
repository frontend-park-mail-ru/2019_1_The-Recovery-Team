import * as React from 'libs/Cheburact';
import SitePart from './SitePart';
import {CurPage} from './config/modes';
const __avatar = require('./__img/Avatar.png');

const __user = {
  nickname: 'Nagibator228',
  email: 'vasya@mail.ru',
  avatar: __avatar,
  rating: 1050,
  position: 30,
};

export default class App extends React.Component {
  state = {
    user: null,
    mode: CurPage.LEADERS,
  };

  handleChangeMode = (mode: CurPage) => this.setState({ mode });

  render() {
    const { user, mode, } = this.state;

    return (
        <SitePart user={user} mode={mode} onChangeMode={this.handleChangeMode}/>
    );
  }
}
