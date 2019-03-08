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
    leaders : [
      {nickname: 'Ivan', rating: 500},
      {nickname: 'Daniil', rating: 475},
      {nickname: 'Nikita', rating: 450},
      {nickname: 'Marya', rating: 400},
      {nickname: 'Ivan198', rating: 300},
      {nickname: 'Opa', rating: 250}
    ],
    mode: curPage.LEADERS
  };

  render() {
    const { user, mode, leaders } = this.state;

    return (
        <SitePart user={user} mode={mode} leaders={leaders}/>
    );
  }
}
