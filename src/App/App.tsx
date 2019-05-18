import { routesMap } from 'config/routes';
import GamePart from 'game/GamePart';
import * as React from 'libs/Cheburact';
import { Route } from 'libs/Cheburouter';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import userStore, { userActions, UserUpdateSuccessPL } from 'store/userStore';
// import ChatContainer from './ChatContainer';
import Music from './Music';
import SitePart from './SitePart';

const styles = require('./App.modules.scss');

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

    return (
      <div className={styles.app}>
        <Route template={routesMap.GAME_PART.template} component={GamePart} />
        <Route
          template={routesMap.GAME_PART.template}
          negative={true}
          component={SitePart}
          user={user}
        />
        <Music />
        {/*<ChatContainer />*/}
      </div>
    );
  }
}

export default App;
