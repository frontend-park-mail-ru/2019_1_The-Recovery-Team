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

  finalGo(name: string, path: string): Cheburouter {
    this.store.curPath = path;
    if (path !== window.location.pathname) {
      window.history.pushState({}, name, path);
    }
    return this.setTitle(name).emit(actionRouterPushOk({ path }));
  }

  setTitle(name: string) {
    console.log('set title for', name, this.routes[name]);
    document.title = this.routes[name].title || 'SadIslands';
    return this;
  }

  go(path: string = this.store.curPath): Cheburouter {
    const { safe: thisSafe } = this.store;

    for (const route of Object.values(this.routes)) {
      const { template, exact = false, safe = false, name } = route;

      if (match(template, path, exact) && (!safe || (safe && thisSafe))) {
        return this.finalGo(name, path);
      }
    }

    return this.finalGo(this.baseName, this.routes[this.baseName].template);
  }

  init(routes: { [name: string]: RouteParams }, baseName: string): Cheburouter {
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
