import { ResultPL } from './store/actions';
import { GameModes } from './config';

export interface ITransport {
  init(): Promise<ResultPL>;
  stop(): Promise<ResultPL>;
}
