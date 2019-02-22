import { IElement, IUpdater } from 'libs/Cheburact/types';

let updateQueue: Array<IElement> = [];
let waitingUpdateQueue: Array<IElement> = [];

export default class Updater implements IUpdater {
  enqueueUpdate(element: IElement) {
    waitingUpdateQueue.push(element);
    console.log('ENQUEUE');
    window.requestAnimationFrame(() => {
      console.log('START AF');
      if (updateQueue.length === 0 && waitingUpdateQueue.length !== 0) {
        [updateQueue, waitingUpdateQueue] = [waitingUpdateQueue, updateQueue];
        // TODO: start reconciliation
        updateQueue = [];
      }
    });
  }
}
