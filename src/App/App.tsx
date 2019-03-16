import API from 'config/API';
import * as React from 'libs/Cheburact';
import Requester from 'libs/Requester';
import { CurPage } from './config/modes';
import SitePart from './SitePart';
const defaultAvatar = require('./img/nouser.png');

export default class App extends React.Component {
  public state = {
    user: null,
    mode: CurPage.START,
  };

  public componentDidMount() {
    Requester.get(API.sessions())
      .then(({ response, error }) => {
        if (response && (response as any).id) {
          return Requester.get(API.profileItem((response as any).id || ''));
        }
        return { response, error };
      })
      .then(({ response, error }) => {
        if (response) {
          this.handleAuthorized(response);
        }
      });
  }

  public handleChangeMode = (mode: CurPage) => this.setState({ mode });

  public handleLogout = () =>
    Requester.delete(API.sessions()).then(({ response, error }) => {
      if (response) {
        this.setState({
          mode: CurPage.START,
          user: null,
        });
      }
    });

  public handleAuthorized = user => {
    this.setState({
      user: user
        ? {
            ...user,
            avatar:
              user.avatar && user.avatar.length !== 0
                ? user.avatar
                : defaultAvatar,
          }
        : null,
      mode: CurPage.PROFILE,
    });
  };

  public render() {
    const { user, mode } = this.state;

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
