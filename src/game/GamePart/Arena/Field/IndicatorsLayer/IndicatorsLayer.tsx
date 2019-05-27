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
  indicatorLineRef: HTMLElement | null = null;

  state = {
    curActiveItemId: null,
    curActiveItemType: null,
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
    const { id, item } = gameStore.selectMyActiveItem();

    this.updateIndicatorLine(item);
    if (id !== this.state.curActiveItemId) {
      this.setState({
        curActiveItemId: id,
        curActiveItemType: item ? item.type : null,
      });
    }
  };

  setIndicatorLineClassNames = (duration: number = ITEM_MAX_DURATION + 1) => {
    if (!this.indicatorLineRef) {
      return;
    }

    if (duration <= ITEM_MAX_DURATION) {
      this.indicatorLineRef.style.transition =
        'background-color 1s linear, width 1s linear';
    } else {
      this.indicatorLineRef.style.removeProperty('transition');
    }

    this.indicatorLineRef.style.width = `${Math.floor(
      (Math.max(duration - 1, 0) / ITEM_MAX_DURATION) * 1000
    ) / 10}%`;

    const durationRatio = duration / ITEM_MAX_DURATION;

    this.indicatorLineRef.className = cn(
      'indicators-layer__line-content',
      durationRatio >= 0.7 && 'indicators-layer__line-content_full',
      durationRatio < 0.7 &&
        durationRatio >= 0.5 &&
        'indicators-layer__line-content_medium',
      durationRatio < 0.5 && 'indicators-layer__line-content_empty'
    );
  };

  updateIndicatorLine = (item: null | GameModels.ActiveItem) => {
    if (item === null) {
      // Восстанавливаем полную ширину;
      this.setIndicatorLineClassNames();
      return;
    }

    this.setIndicatorLineClassNames(item.duration);
  };

  setLineRef = r => {
    this.indicatorLineRef = r;
    this.updateItemIndicator();
  };

  render() {
    const { curActiveItemId } = this.state;
    return (
      <div className={cn('indicators-layer')}>
        <div
          className={cn(
            'indicators-layer__line',
            !curActiveItemId && 'indicators-layer__line_hidden'
          )}
        >
          <div ref={this.setLineRef} />
        </div>
      </div>
    );
  }
}

export default IndicatorsLayer;
