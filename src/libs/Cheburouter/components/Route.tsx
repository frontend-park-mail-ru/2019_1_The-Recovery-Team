import * as React from 'libs/Cheburact';
import { match } from 'libs/Cheburouter/utils';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import { routerActions, RouterPathPL } from '../actions';
import routerStore from '../routerStore';

// @ts-ignore
@connectToCheburstore
export class Route extends React.Component {
  state = {
    curPath: routerStore.select().curPath,
  };

  @onCheburevent(routerStore, routerActions.PUSH_OK)
  handleChangePath({ payload: { path } }: Action<RouterPathPL>) {
    this.setState({
      curPath: path,
    });
  }

  render() {
    // noinspection TsLint
    const { template, exact = false, component: Comp, ...rest } = this.props;

    const { curPath } = this.state;

    const result = match(template, curPath, exact);

    return !result ? null : <Comp routerParams={result} {...rest} />;
  }
}
