import { GameModels, ITEM_MAX_DURATION } from 'game/config';
import gameStore, { gameStoreActions } from 'game/store';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';

const styles = require('./IndicatorsLayer.modules.scss');
const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
class IndicatorsLayer extends React.Component {
  indicatorLineRef: HTMLElement | null;

  state = {
    curActiveItemId: null,
  };

  componentDidMount() {
    this.updateItemIndicator();
  }

  @onCheburevent(gameStore, gameStoreActions.SET_STATE)
  handleSetState() {
    this.updateItemIndicator();
  }

  @onCheburevent(gameStore, gameStoreActions.SET_STATE_UPDATED)
  handleChangeState() {
    this.updateItemIndicator();
  }

  updateItemIndicator = () => {
    const { activeItems } = gameStore.select().state;
    const myId = gameStore.selectMyId();

    let curItemId: null | number = null;
    let curItem: null | GameModels.ActiveItem = null;
    for (const [id, item] of Object.entries(activeItems)) {
      if (item && item.playerId === myId) {
        curItemId = id as any;
        curItem = item;
        break;
      }
    }

    this.updateIndicatorLine(curItem);
    if (curItemId !== this.state.curActiveItemId) {
      this.setState({
        curActiveItemId: curItemId,
      });
    }
  };

  updateIndicatorLine = (item: null | GameModels.ActiveItem) => {
    if (item === null) {
      this.indicatorLineRef = null;
      return;
    }

    if (!this.indicatorLineRef) {
      return;
    }

    this.indicatorLineRef.style.width = `${Math.floor(
      (Math.max(item.duration - 1, 0) / ITEM_MAX_DURATION) * 1000
    ) / 10}%`;

    const durationRatio = item.duration / ITEM_MAX_DURATION;

    this.indicatorLineRef.className = cn(
      'indicators-layer__line-content',
      durationRatio >= 0.66 && 'indicators-layer__line-content_full',
      durationRatio < 0.66 &&
        durationRatio >= 0.4 &&
        'indicators-layer__line-content_medium',
      durationRatio < 0.4 && 'indicators-layer__line-content_empty'
    );
  };

  setLineRef = r => {
    this.indicatorLineRef = r;
    this.updateItemIndicator();
  };

  render() {
    const { curActiveItemId } = this.state;
    return (
      <div className={cn('indicators-layer')}>
        {curActiveItemId && (
          <div className={cn('indicators-layer__line')}>
            <div
              ref={this.setLineRef}
              className={cn('indicators-layer__line-content')}
            />
          </div>
        )}
      </div>
    );
  }
}

export default IndicatorsLayer;
