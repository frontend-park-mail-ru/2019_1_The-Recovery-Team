import { routeNames, routesMap } from 'config/routes';
import * as React from 'libs/Cheburact';
import * as CheburactDOM from 'libs/CheburactDOM';
import router from 'libs/Cheburouter';
import App from './App';
require('./styles/global.scss');

CheburactDOM.render(<App />, document.getElementById('root'));
router.init(routesMap, routeNames.BASE);
