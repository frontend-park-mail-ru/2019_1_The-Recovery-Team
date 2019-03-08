import { FiberCollectionItem, FiberCollections } from './types';

export default ({
  keysMap,
  componentsArr,
  stringsMap,
  vNodesMap
}: FiberCollections): Array<FiberCollectionItem> => {
  const res = [
      ...componentsArr,
      ...Object.values(keysMap),
  ];

  Object.values({ ...stringsMap, ...vNodesMap }).forEach((items) => {
    res.push(...items);
  });

  return res;
};
