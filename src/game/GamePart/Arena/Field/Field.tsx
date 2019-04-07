import gameStore, { gameStoreActions } from 'game/store';
import * as React from 'libs/Cheburact/index';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames/index';
import debounce from 'libs/debounce';
import calcFieldSize from './utils/calcFieldSize';
import CellsLayer from './CellsLayer/CellsLayer';
import PlayersLayer from './PlayersLayer/PlayersLayer';
const styles = require('./Field.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Field extends React.Component {
  fieldRef: null | HTMLElement = null;

  debouncedResize = debounce(() => {
    this.recalcField();
  }, 1000);

  componentDidMount() {
    this.recalcField();
    window.addEventListener('resize', this.debouncedResize);
  }

  @onCheburevent(gameStore, gameStoreActions.SET_STATE_UPDATED)
  recalcField() {
    const {
      field: { width: colCount, height: rowCount },
    } = gameStore.select().state;

    const windowW =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const windowH =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const { width, height } = calcFieldSize(
      windowW,
      windowH,
      colCount,
      rowCount
    );

    if (this.fieldRef) {
      this.fieldRef.style.width = `${width}px`;
      this.fieldRef.style.height = `${height}px`;
    }
  }

  render() {
    return (
      <div className={cn('field')} ref={r => (this.fieldRef = r)}>
        <PlayersLayer />
        <CellsLayer />
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedResize);
  }
}
