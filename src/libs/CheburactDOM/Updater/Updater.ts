import { IComponent, IUpdater } from 'libs/Cheburact/types';
import debounce from 'libs/debounce';
import { UpdateQueueItem } from '../types';

const UPDATE_DELAY = 16; // ms

export default class Updater implements IUpdater {
  updateQueue: Array<UpdateQueueItem> = [];
  waitingUpdateQueue: Array<UpdateQueueItem> = [];
  updateTreeFunc: ((q: Array<UpdateQueueItem>) => any) | null = null;

  setUpdateTreeFunc(updateTreeFunc: (q: Array<UpdateQueueItem>) => any) {
    this.updateTreeFunc = updateTreeFunc;
  }

  reconcile = debounce(() => {
    if (this.updateTreeFunc) {
      this.beforeUpdate();

      this.updateTreeFunc(this.updateQueue);

      this.afterUpdate();
    }
  }, UPDATE_DELAY);

  canStartUpdate() {
    return this.updateQueue.length === 0 && this.waitingUpdateQueue.length !== 0;
  }

  enqueueUpdate(element: IComponent, nextState?: Object) {
    if (element['__fiber']) {
      const relatedFiber: any = element['__fiber'];
      this.waitingUpdateQueue.push({
        fiberNode: relatedFiber,
        nextState
      });

      if (this.canStartUpdate()) {
        this.reconcile();
      }
    }
  }

  beforeUpdate() {
    [ this.updateQueue, this.waitingUpdateQueue ]
        = [ this.waitingUpdateQueue, this.updateQueue ];
  }

  afterUpdate() {
    this.updateQueue = [];
  }
}
