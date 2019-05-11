import { CELL_SIZE } from 'game/config';
import classNames from 'libs/classNames';
const styles = require('./PlayersLayer.modules.scss');

const cn = classNames(styles);

export const setPlayerPosition = (
  playerRef: HTMLElement,
  colCount: number,
  rowCount: number,
  xPos: number,
  yPos: number
) => {
  const calcForOne = (sideCount: number, sidePos: number): string => {
    const pos: any = (sidePos * 2 + 1) / (sideCount * 2 * CELL_SIZE);
    return `${Math.floor(pos * 1000) / 10}%`;
  };

  playerRef.style.top = calcForOne(rowCount, yPos);
  playerRef.style.left = calcForOne(colCount, xPos);
};

export const setPlayerClasses = (
  playerRef: HTMLElement,
  isMe: boolean,
  xPos: number,
  yPos: number,
  dead: boolean = false
) => {
  const STAGES_COUNT = 6;
  const stage = ((xPos + yPos) % STAGES_COUNT) + 1;

  const iconClassName = `layer__player_${isMe ? 'me' : 'opponent'}-${stage}`;

  playerRef.className = cn(
    'layer__player',
    `layer__player_${isMe ? 'me' : 'opponent'}`,
    iconClassName,
    dead && 'layer__player_dead'
  );
};
