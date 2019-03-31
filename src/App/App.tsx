import * as React from 'libs/Cheburact';
import { Action } from 'libs/Cheburstore';
import userStore, {
  actionUserCheckAuth,
  userActionTypes,
  UserLoginSuccessPL,
} from 'store/userStore';
import { CurPage } from './config/modes';
import SitePart from './SitePart';

export default class App extends React.Component {
  state = {
    user: null,
    mode: CurPage.START,
  };

  constructor(props) {
    super(props);
    userStore
      .on(userActionTypes.USER_LOGIN_SUCCESS, this.handleAuthorized)
      .on(userActionTypes.USER_LOGOUT_SUCCESS, this.handleLogout);
  }

  componentDidMount() {
    userStore.emit(actionUserCheckAuth());
  }

  componentWillUnmount() {
    userStore
      .off(userActionTypes.USER_LOGIN_SUCCESS, this.handleAuthorized)
      .off(userActionTypes.USER_LOGOUT_SUCCESS, this.handleLogout);
  }

  handleChangeMode = (mode: CurPage) => this.setState({ mode });

  handleLogout = () =>
    this.setState({
      user: null,
      mode: CurPage.START,
    });

  handleAuthorized = (action: Action<UserLoginSuccessPL>) =>
    this.setState({
      user: action.payload.profile,
      mode: CurPage.PROFILE,
    });

  render() {
    const { user, mode } = this.state;

    return (
      <SitePart
        user={user}
        mode={mode}
        onChangeMode={this.handleChangeMode}
      />
    );
  }
}
