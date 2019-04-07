import { GameModels } from 'game/config';
import gameStore, { gameStoreActions } from 'game/store';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import { getImage } from './config';
const styles = require('./CellsLayer.modules.scss');

const cn = classNames(styles);

interface State {
  cells: Array<{
    ref: HTMLElement;
    type: null | GameModels.CellType;
  }>;
}

// @ts-ignore
@connectToCheburstore
export default class CellsLayer extends React.Component {
  cells: Array<{
    ref: HTMLElement;
    type: null | GameModels.CellType;
  }> = [];
  prevColCount = 0;
  prevRowCount = 0;

  @onCheburevent(gameStore, gameStoreActions.SET_STATE_UPDATED)
  updateCells() {
    this.setState({});

    const {
      state: {
        field: { width: colCount, height: rowCount, cells },
      },
    } = gameStore.select();

    const widthPercent = 100 / colCount;
    const heightPercent = 100 / rowCount;

    this.prevColCount = colCount;
    this.prevRowCount = rowCount;

    this.cells.forEach(({ ref, type }, index) => {
      ref.style.width = `${widthPercent}%`;
      ref.style.height = `${heightPercent}%`;

      if (type !== cells[index].type) {
        this.cells[index].type = cells[index].type;
        ref.style.backgroundImage = `url(${getImage(cells[index].type)})`;
      }
    });
  }

  componentDidMount() {
    this.updateCells();
  }

  render() {
    const { cells } = gameStore.select().state.field;

    return (
      <div className={cn('layer')}>
        {cells.map(() => (
          <div
            className={cn('layer__cell')}
            ref={r =>
              this.cells.push({
                type: null,
                ref: r,
              })
            }
          />
        ))}
      </div>
    );
  }

  componentWillUnmount() {}
}
