import { Action } from 'libs/Cheburstore';
import { ResultPL } from './store/actions';

export type TransportCallback = (action: Action<any>) => void;

export interface ITransport {
  init(receiver: TransportCallback): ResultPL;
  stop(): ResultPL;
  send(action: Action<any>): any;
}

export interface IControllersManager {
  connect();
  disconnect();
}
