import { routeNames, routesMap } from 'config/routes';
import * as React from 'libs/Cheburact';
import * as CheburactDOM from 'libs/CheburactDOM';
import router, {
  actionRouterSetSafe,
  actionRouterSetUnsafe,
} from 'libs/Cheburouter';
import userStore, { actionUserCheckAuth, userActions } from 'store/userStore';
import checkIsMobile from 'utils/checkIsMobile';
import registerServiceWorker from 'utils/registerServiceWorker';
import App from './App';
require('./styles/global.scss');

registerServiceWorker();
checkIsMobile();

const init = renderFunc => {
  let first = true;
  router.init(routesMap, routeNames.BASE);

  const routerInit = action => {
    const isProfile = action && action.payload && action.payload.profile;
    router.emit(isProfile ? actionRouterSetSafe() : actionRouterSetUnsafe());
    if (first) {
      first = false;
      renderFunc();
    }
  };

  userStore
    .on(userActions.UPDATE_SUCCESS, routerInit)
    .on(userActions.LOGOUT_SUCCESS, routerInit);
  userStore.emit(actionUserCheckAuth());
};

init(() => {
  CheburactDOM.render(<App />, document.getElementById('root'));
});
