import { IComponent } from 'libs/Cheburact/types';
import { UpdateQueueItem } from 'libs/CheburactDOM/types';
import { COMPONENT_FIBER } from 'libs/CheburactDOM/config/customFields';

export default (item: IComponent, q: Array<UpdateQueueItem>): UpdateQueueItem | null => {
  for (let qItem of q) {
    if (qItem.fiberNode === (item as any)[COMPONENT_FIBER]) {
      return qItem;
    }
  }
  return null;
};
