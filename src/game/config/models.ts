export enum Direction {
  LEFT = 'LEFT',
  UP = 'UP',
  RIGHT = 'RIGHT',
  DOWN = 'DOWN',
}

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
  roundNumber: number;
  roundTimer: number;
}

export const initialGameState: GameState = {
  field: {
    height: 0,
    width: 0,
    cells: [],
  },
  roundTimer: 0,
  roundNumber: 0,
  players: {},
  activeItems: {},
};
