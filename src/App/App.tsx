import * as React from 'libs/Cheburact';
import SitePart from './SitePart';
import {CurPage} from './config/modes';
import Requester from 'libs/Requester/Requester';
import API from 'config/API';
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
    mode: CurPage.START,
  };

  componentDidMount() {
    Requester
        .get(API.sessions())
        .then(({ response, error }) => {
          if (response && response.id) {
            return Requester.get(API.profileItem(response.id || ''));
          }
        })
        .then(({ response, error }) => {
          if (response) {
            this.setState({ user: response });
          }
        });
  }

  handleChangeMode = (mode: CurPage) => this.setState({ mode });

  handleLogout = () => this.setState({
    mode: CurPage.START,
    user: null,
  });

  handleAuthorized = (user) => {
    console.log(user);
    this.setState({ user, mode: CurPage.PROFILE });
  };

  render() {
    const { user, mode, } = this.state;

    return (
        <SitePart
            user={user}
            mode={mode}
            onChangeMode={this.handleChangeMode}
            onLogout={this.handleLogout}
            onAuthorized={this.handleAuthorized}
        />
    );
  }
}
