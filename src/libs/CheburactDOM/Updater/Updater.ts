import { IElement, IUpdater } from 'libs/Cheburact/types';
import debounce from 'libs/debounce';

const UPDATE_DELAY = 16; // ms

interface UpdateQueueItem {
  element: IElement,
  nextState?: Object,
}

export default class Updater implements IUpdater {
  updateQueue: Array<UpdateQueueItem> = [];
  waitingUpdateQueue: Array<UpdateQueueItem> = [];
  updateTreeFunc: ((updateQueue: Array<UpdateQueueItem>) => any) | null = null;

  setUpdateTreeFunc(updateTreeFunc: () => any) {
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

  enqueueUpdate(element: IElement, nextState?: Object) {
    this.waitingUpdateQueue.push({ element, nextState});

    if (this.canStartUpdate()) {
      this.reconcile();
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
