import * as React from 'libs/Cheburact';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import userStore, {
  actionUserCheckAuth,
  userActions,
  UserUpdateSuccessPL,
} from 'store/userStore';
import { CurPage } from './config/modes';
import SitePart from './SitePart';

@connectToCheburstore
class App extends React.Component {
  state = {
    user: null,
    mode: CurPage.START,
  };

  componentDidMount() {
    userStore.emit(actionUserCheckAuth());
  }

  handleChangeMode = (mode: CurPage) => this.setState({ mode });

  @onCheburevent(userStore, userActions.LOGOUT_SUCCESS)
  handleLogout() {
    this.setState({
      user: null,
      mode: CurPage.START,
    });
  };

  @onCheburevent(userStore, userActions.UPDATE_SUCCESS)
  handleAuthorized(action: Action<UserUpdateSuccessPL>) {
    this.setState({
      user: action.payload.profile,
      mode: CurPage.PROFILE,
    });
  }

  render() {
    const { user, mode } = this.state;

    return (
      <SitePart user={user} mode={mode} onChangeMode={this.handleChangeMode} />
    );
  }
}

export default App;
