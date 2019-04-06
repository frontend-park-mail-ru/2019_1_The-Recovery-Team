export enum ItemType {
  LIFEBUOY = 'LIFEBUOY',
  BOMB = 'BOMB',
  SAND = 'SAND',
}

export interface ActiveItem {
  type: ItemType;
  playerId: number;
  duration: number;
}

export enum CellType {
  WATER = 'WATER',
  SAND = 'SAND',
  SWAMP = 'SWAMP',
}

export interface Cell {
  row: number;
  col: number;
  type: CellType;
  hasBox: boolean;
}

export interface Field {
  cells: Array<Cell>;
  width: number;
  height: number;
}

export interface Player {
  id: number;
  x: number;
  y: number;
  items: {
    [itemType: string]: number;
  };
  loseRound: number | null;
}

export interface GameState {
  field: Field;
  players: {
    [id: string]: Player;
  };
  activeItems: {
    [id: string]: ActiveItem;
  };
  RoundNumber: number;
  RoundTimer: number;
}
