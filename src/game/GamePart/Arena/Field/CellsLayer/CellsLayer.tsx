import gameStore, { gameStoreActions } from 'game/store';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';
import { getCellId, setCellClass } from './utils';

const styles = require('./CellsLayer.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class CellsLayer extends React.Component {
  cellRefs: { [id: string]: HTMLElement } = {};

  @onCheburevent(gameStore, gameStoreActions.SET_STATE_UPDATED)
  updateCells() {
    const {
      cells,
      height: rowCount,
      width: colCount,
    } = gameStore.select().state.field;

    const widthPercent = 100 / colCount;
    const heightPercent = 100 / rowCount;

    cells.forEach(cell => {
      const ref = this.cellRefs[getCellId(cell)];
      if (!ref) {
        return;
      }

      ref.style.width = `${widthPercent}%`;
      ref.style.height = `${heightPercent}%`;

      setCellClass(ref, cell.type);
    });
  }

  @onCheburevent(gameStore, gameStoreActions.SET_STATE)
  initCells() {
    this.setState({});
  }

  componentDidMount() {
    this.updateCells();
  }

  componentDidUpdate() {
    this.updateCells();
  }

  render() {
    const { cells } = gameStore.select().state.field;

    return (
      <div className={cn('layer')}>
        {cells.map(cell => (
          <div ref={r => (this.cellRefs[getCellId(cell)] = r)} />
        ))}
      </div>
    );
  }

  componentWillUnmount() {}
}
