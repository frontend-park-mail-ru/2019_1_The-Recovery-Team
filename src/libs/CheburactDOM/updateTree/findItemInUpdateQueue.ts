import { IComponent } from 'libs/Cheburact/types';
import { COMPONENT_FIBER } from '../config/customFields';
import { UpdateQueueItem } from '../types';

// Пробегает по очереди и для айтемов с одной файбер-нодой мержит все
// nextState в один, где более поздние стейты мержатся
// и частично перетирают текущий
export default (
  item: IComponent,
  q: Array<UpdateQueueItem>
): UpdateQueueItem | null => {
  let resultQItem: UpdateQueueItem | null = null;
  for (const qItem of q) {
    if (qItem.fiberNode === (item as any)[COMPONENT_FIBER]) {
      if (!resultQItem) {
        resultQItem = { ...qItem };
      } else {
        (resultQItem as UpdateQueueItem).nextState = {
          ...(resultQItem.nextState || {}),
          ...(qItem.nextState || {}),
        };
      }
    }
  }
  return resultQItem;
};
