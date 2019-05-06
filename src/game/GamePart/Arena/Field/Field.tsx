import gameStore, { gameStoreActions } from 'game/store';
import * as React from 'libs/Cheburact/index';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames/index';
import debounce from 'libs/debounce';
import CellsLayer from './CellsLayer/CellsLayer';
import IndicatorsLayer from './IndicatorsLayer/IndicatorsLayer';
import PlayersLayer from './PlayersLayer/PlayersLayer';
import calcFieldSize from './utils/calcFieldSize';
const styles = require('./Field.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class Field extends React.Component {
  fieldRef: null | HTMLElement = null;
  fieldContainerRef: null | HTMLElement = null;

  debouncedResize = debounce(() => {
    this.recalcField();
  }, 1000);

  componentDidMount() {
    this.recalcField();
    window.addEventListener('resize', this.debouncedResize);
  }

  @onCheburevent(gameStore, gameStoreActions.SET_STATE)
  handleSetState() {
    this.recalcField();
  }

  @onCheburevent(gameStore, gameStoreActions.SET_STATE_UPDATED)
  recalcField() {
    const {
      field: { width: colCount, height: rowCount },
    } = gameStore.select().state;

    if (!this.fieldContainerRef) {
      return;
    }
    const {
      width: windowW,
      height: windowH,
    } = this.fieldContainerRef.getBoundingClientRect();

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

    const { onWidthChanged = () => null } = this.props;
    onWidthChanged(width);
  }

  render() {
    return (
      <div
        className={cn('field__container')}
        ref={r => (this.fieldContainerRef = r)}
      >
        <div className={cn('field')} ref={r => (this.fieldRef = r)}>
          <PlayersLayer />
          <IndicatorsLayer />
          <CellsLayer />
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedResize);
  }
}
