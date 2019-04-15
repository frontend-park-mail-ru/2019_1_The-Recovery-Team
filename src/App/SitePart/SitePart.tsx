import { routesMap } from 'config/routes';
import * as React from 'libs/Cheburact';
import { Route } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
import userStore, { actionUserLogout } from 'store/userStore';
import AuthPage from './AuthPage';
import EditProfilePage from './EditProfilePage';
import Header from './Header';
import LeadersPage from './LeadersPage';
import ProfilePage from './ProfilePage';
import StartPage from './StartPage/StartPage';
const styles = require('./SitePart.modules.scss');

const cn = classNames(styles);

export default class SitePart extends React.Component {
  handleLogout = () => userStore.emit(actionUserLogout());

  public render() {
    const { user, mode } = this.props;

    return (
      <div className={cn('site-part')}>
        <Header user={user} mode={mode} onLogout={this.handleLogout} />
        <Route
          template={routesMap.BASE.template}
          exact={true}
          authorized={!!user}
          component={StartPage}
        />
        <Route template={routesMap.SIGN.template} component={AuthPage} />
        <Route
          template={routesMap.PROFILE.template}
          component={ProfilePage}
          exact={true}
        />
        <Route
          template={routesMap.LEADER_BOARD.template}
          component={LeadersPage}
        />
        <Route
          template={routesMap.PROFILE_EDIT.template}
          component={EditProfilePage}
        />
      </div>
    );
  }
}
