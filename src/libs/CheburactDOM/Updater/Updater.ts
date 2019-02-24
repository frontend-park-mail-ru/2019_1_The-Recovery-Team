import { IElement, IUpdater } from 'libs/Cheburact/types';
import debounce from 'libs/debounce';

let updateQueue: Array<IElement> = [];
let waitingUpdateQueue: Array<IElement> = [];

const UPDATE_DELAY = 16;

export default class Updater implements IUpdater {
  reconcile = debounce(() => {
    [ updateQueue, waitingUpdateQueue ] = [ waitingUpdateQueue, updateQueue ];

    console.log('REBUILD');

    updateQueue = [];
  }, UPDATE_DELAY);

  enqueueUpdate(element: IElement) {
    waitingUpdateQueue.push(element);
    console.log('ENQUEUE');

    if (updateQueue.length === 0 && waitingUpdateQueue.length !== 0) {
      this.reconcile();
    }
  }
}
