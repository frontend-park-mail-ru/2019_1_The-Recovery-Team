import * as React from 'libs/Cheburact';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import userStore, {
  userActions,
  UserUpdateSuccessPL,
} from 'store/userStore';
import SitePart from './SitePart';

// @ts-ignore
@connectToCheburstore
class App extends React.Component {
  state = {
    user: userStore.select().user,
  };

  @onCheburevent(userStore, userActions.LOGOUT_SUCCESS)
  handleLogout() {
    this.setState({
      user: null,
    });
  }

  @onCheburevent(userStore, userActions.UPDATE_SUCCESS)
  handleAuthorized(action: Action<UserUpdateSuccessPL>) {
    this.setState({
      user: action.payload.profile,
    });
  }

  render() {
    const { user } = this.state;

    return <SitePart user={user} />;
  }
}

export default App;
