import { GameModels } from 'game/config';

const sandIcon = require('./img/sand.svg');
const waterIcon = require('./img/water.svg');
const swampIcon = require('./img/swamp.svg');

export const getImage = (type: GameModels.CellType): string => {
  switch (type) {
    case GameModels.CellType.SAND:
      return sandIcon;
    case GameModels.CellType.SWAMP:
      return swampIcon;
    default:
      return waterIcon;
  }
};
