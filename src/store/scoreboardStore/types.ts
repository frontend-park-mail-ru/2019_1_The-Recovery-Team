export interface Leader {
  id: number;
  nickname: string;
  record: number;
  win: number;
  loss: number;
}

export interface ScoreboardState {
  leaders: Array<Leader> | null;
  offset: number;
  total: number;
}
