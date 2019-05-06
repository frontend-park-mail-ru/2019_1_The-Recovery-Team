import { routesMap } from 'config/routes';
import * as React from 'libs/Cheburact';
import { Route } from 'libs/Cheburouter';
import classNames from 'libs/classNames';
import userStore, { actionUserLogout } from 'store/userStore';
import AboutPage from './AboutPage';
import AuthPage from './AuthPage';
import Header from './Header';
import LeadersPage from './LeadersPage';
import ProfilePage from './ProfilePage';
import RulesPage from './RulesPage';
import SideBar from './SideBar';
import StartPage from './StartPage';
const styles = require('./SitePart.modules.scss');

const cn = classNames(styles);

export default class SitePart extends React.Component {
  state = {
    isSideBarOpen: false,
  };

  handleLogout = () => userStore.emit(actionUserLogout());

  toggleSidebar = () => {
    this.setState({ isSideBarOpen: !this.state.isSideBarOpen });
  };

  public render() {
    const { user } = this.props;
    const { isSideBarOpen } = this.state;

    return (
      <div className={cn('site-part')}>
        <SideBar
          isOpen={isSideBarOpen}
          onClose={this.toggleSidebar}
          user={user}
        />
        <div className={cn('site-part__content')}>
          <Header
            onLogout={this.handleLogout}
            onOpenSideBar={this.toggleSidebar}
          />
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
          />
          <Route
            template={routesMap.LEADER_BOARD.template}
            component={LeadersPage}
          />
          <Route template={routesMap.ABOUT.template} component={AboutPage} />
          <Route template={routesMap.RULES.template} component={RulesPage} />
        </div>
      </div>
    );
  }
}
