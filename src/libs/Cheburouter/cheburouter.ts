import { RouteParams } from 'libs/Cheburouter/types';
import { match } from 'libs/Cheburouter/utils';
import { Action, cheburhandler, cheburmodel } from 'libs/Cheburstore';
import Cheburstore from 'libs/Cheburstore/Cheburstore';
import { actionRouterPushOk, routerActions, RouterPathPL } from './actions';

export interface CheburouterState {
  curPath: string;
  safe: boolean;
}

// @ts-ignore
@cheburmodel
class Cheburouter extends Cheburstore<CheburouterState> {
  routes: { [name: string]: RouteParams };
  baseName: string;

  constructor() {
    super();
    this.routes = {};
    this.baseName = '';
    this.store = {
      curPath: window.location.pathname,
      safe: false,
    };
  }

  finalGo(name: string, path: string) {
    console.log('final go: ', name, path);
    this.store.curPath = path;
    if (path !== window.location.pathname) {
      window.history.pushState({}, name, path);
    }
    document.title = this.routes[name].name;
    this.emit(actionRouterPushOk({ path }));
  }

  go(path: string = this.store.curPath) {
    for (const route of Object.values(this.routes)) {
      const { template, exact = false, safe = false, name } = route;

      if (match(template, path, exact) && this.store.safe >= safe) {
        this.finalGo(name, path);
        return;
      }
    }

    this.finalGo(this.baseName, path);
  }

  init(routes: { [name: string]: RouteParams }, baseName: string) {
    this.routes = routes;
    this.baseName = baseName;

    this.go(window.location.pathname);

    window.addEventListener('popstate', () => {
      const currentPath = window.location.pathname;
      this.go(currentPath);
    });
  }

  @cheburhandler(routerActions.PUSH)
  push({ payload: { path } }: Action<RouterPathPL>) {
    this.go(path);
  }

  @cheburhandler(routerActions.SET_SAFE)
  setSafe() {
    this.store.safe = true;
    this.go();
  }

  @cheburhandler(routerActions.SET_UNSAFE)
  setUnsafe() {
    this.store.safe = false;
    this.go();
  }

  @cheburhandler(routerActions.BACK)
  goBack() {
    window.history.back();
  }

  @cheburhandler(routerActions.FORWARD)
  goForward() {
    window.history.forward();
  }
}

export default new Cheburouter();
