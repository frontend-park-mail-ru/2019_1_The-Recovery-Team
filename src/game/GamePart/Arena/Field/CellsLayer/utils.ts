import { Cell, CellType } from 'game/config/models';
import classNames from 'libs/classNames';

const styles = require('./CellsLayer.modules.scss');

const cn = classNames(styles);

export const setCellClass = (ref: HTMLElement, type: CellType) => {
  const res = cn(
    'layer__cell',
    type === CellType.SAND && 'layer__cell_sand',
    type === CellType.WATER && 'layer__cell_water',
    type === CellType.SWAMP && 'layer__cell_swamp'
  );
  ref.className = res;
};

export const getCellId = (cell: Cell): string => `${cell.col}_${cell.row}`;
