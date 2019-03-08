import * as React from 'libs/Cheburact';
import SitePart from './SitePart';
import {curPage} from './config/modes';
const __avatar = require('./__img/Avatar.png');


export default class App extends React.Component {
  state = {
    user: {
      nickname: 'Nagibator228',
      email: 'vasya@mail.ru',
      avatar: __avatar,
      rating: 1050,
      position: 30,
    },
    mode: curPage.PROFILE
  };

  render() {
    const { user, mode } = this.state;

    return (
        <SitePart user={user} mode={mode}/>
    );
  }
}
