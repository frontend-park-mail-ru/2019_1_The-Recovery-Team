import { GameModels } from 'game/config';
import gameStore, { actionGameInitItemUse, gameStoreActions } from 'game/store';
import * as React from 'libs/Cheburact';
import { connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import classNames from 'libs/classNames';

const styles = require('./Resources.modules.scss');

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
class Resources extends React.Component {
  state = {
    items: {
      [GameModels.ItemType.BOMB]: 0,
      [GameModels.ItemType.SAND]: 0,
      [GameModels.ItemType.LIFEBUOY]: 0,
    },
  };

  updateItems() {
    const {
      state: { players },
    } = gameStore.select();
    const myId = gameStore.selectMyId();
    if (!myId) {
      return;
    }

    const me = players[myId];
    if (me && this.state.items !== me.items) {
      this.setState({
        items: me.items,
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

  handleSelectItem = (item: GameModels.ItemType) => () => {
    console.log('call', item);
    gameStore.emit(
      actionGameInitItemUse({
        playerId: gameStore.selectMyId(),
        itemType: item,
      })
    );
  };

  render() {
    const { items } = this.state;
    console.log('render');

    return (
      <div class={cn('items-container')}>
        {Object.values(GameModels.ItemType).map(type => (
          <div
            key={type}
            onClick={this.handleSelectItem(type)}
            className={cn('resource', !items[type] && 'resource_disabled')}
          >
            <div
              className={cn(
                'resource__container-icon',
                `resource__container-icon_${type}`
              )}
            />
            <div className={cn('resource__counter')}>{`${items[type] ||
              0}`}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Resources;
