import API, { BASE_URL } from 'config/API';
import * as React from 'libs/Cheburact';
import Requester from 'libs/Requester';
import {CurPage} from './config/modes';
import SitePart from './SitePart';
const defaultAvatar = require('./img/nouser.png');

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
          return { response, error };
        })
        .then(({ response, error }) => {
          if (response) {
            this.handleAuthorized(response);
          }
        });
  }

  handleChangeMode = (mode: CurPage) => this.setState({ mode });

  handleLogout = () =>
    Requester.delete(API.sessions())
        .then(({response, error}) => {
          if (response) {
            this.setState({
              mode: CurPage.START,
              user: null,
            });
          }
        });

  handleAuthorized = (user) => {
    this.setState({
      user: user ? {
        ...user,
        avatar: user.avatar && user.avatar.length !== 0
            ? `${BASE_URL}${user.avatar}`
            : defaultAvatar,
      } : null,
      mode: CurPage.PROFILE,
    });
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
