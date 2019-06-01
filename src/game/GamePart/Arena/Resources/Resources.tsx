import { GameModels } from 'game/config';
import gameStore, { actionGameInitItemUse, gameStoreActions } from 'game/store';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';

const bombButtonImage = require('./img/bombButton.svg');
const sandButtonImage = require('./img/sandButton.svg');
const lifebuoyButtonImage = require('./img/lifebuoyButton.svg');

const styles = require('./Resources.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
class Resources extends React.Component {
  state = {
    activeItemType: null,
    items: {
      [GameModels.ItemType.BOMB]: 0,
      [GameModels.ItemType.SAND]: 0,
      [GameModels.ItemType.LIFEBUOY]: 0,
    },
    shortcuts: {
      [GameModels.ItemType.BOMB]: bombButtonImage,
      [GameModels.ItemType.SAND]: sandButtonImage,
      [GameModels.ItemType.LIFEBUOY]: lifebuoyButtonImage,
    },
  };

  shouldUpdate = (newItems, activeItemType: GameModels.ItemType | null) => {
    const { items, activeItemType: prevActiveItemType } = this.state;
    if (activeItemType !== prevActiveItemType) {
      return true;
    }
    for (const type of Object.values(GameModels.ItemType)) {
      if (items[type] !== newItems[type]) {
        return true;
      }
    }
    return false;
  };

  updateItems() {
    const {
      state: { players },
    } = gameStore.select();
    const myId = gameStore.selectMyId();
    if (!myId) {
      return;
    }

    const { items = null } = players[myId] || {};
    const { item } = gameStore.selectMyActiveItem();
    const activeItemType = !item ? null : item.type;

    if (items && this.shouldUpdate(items, activeItemType)) {
      this.setState({
        activeItemType,
        items,
      });
    }
  }

  componentDidMount() {
    this.updateItems();
  }

  @onCheburevent(gameStore, gameStoreActions.SET_STATE)
  handleSetState() {
    this.updateItems();
  }

  @onCheburevent(gameStore, gameStoreActions.SET_STATE_UPDATED)
  handleStateChanged() {
    this.updateItems();
  }

  emitUseItem = (itemType: GameModels.ItemType) =>
    gameStore.emit(
      actionGameInitItemUse({
        itemType,
        playerId: gameStore.selectMyId(),
      })
    );

  emitUseLifebuoy = () => this.emitUseItem(GameModels.ItemType.LIFEBUOY);
  emitUseBomb = () => this.emitUseItem(GameModels.ItemType.BOMB);
  emitUseSand = () => this.emitUseItem(GameModels.ItemType.SAND);

  handleSelectItem = (item: GameModels.ItemType) => {
    switch (item) {
      case GameModels.ItemType.BOMB:
        return this.emitUseBomb;
      case GameModels.ItemType.LIFEBUOY:
        return this.emitUseLifebuoy;
      default:
        return this.emitUseSand;
    }
  };

  render() {
    const { items, activeItemType, shortcuts } = this.state;

    return (
      <div class={cn('items-container')}>
        {Object.values(GameModels.ItemType).map(type => (
          <div
            key={type}
            onClick={this.handleSelectItem(type)}
            className={cn(
              'resource',
              `resource_${type}`,
              !items[type] && 'resource_disabled'
            )}
          >
            <div
              className={cn(
                'resource__container-icon',
                activeItemType === type && 'resource__container-icon_active'
              )}
            />
            <div className={cn('resource__counter')}>{`${items[type] ||
              0}`}</div>
            <img src={shortcuts[type]} className={cn('resource__shortcut')} />
          </div>
        ))}
      </div>
    );
  }
}

export default Resources;
