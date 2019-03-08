import { IComponent } from 'libs/Cheburact/types';
import { UpdateQueueItem } from '../types';
import { COMPONENT_FIBER } from '../config/customFields';

export default (item: IComponent, q: Array<UpdateQueueItem>): UpdateQueueItem | null => {
  for (let qItem of q) {
    if (qItem.fiberNode === (item as any)[COMPONENT_FIBER]) {
      return qItem;
    }
  }
  return null;
};
