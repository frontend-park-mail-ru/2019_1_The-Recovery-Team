import GameButton from 'components/buttons/GameButton';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import GamePart from '../GamePart';
import ShortcutsModule from '../ShortcutsModule/ShortcutsModule';
const styles = require('./PausePage.modules.scss');

const cn = classNames(styles);

export default class PausePage extends React.Component {
  state = {
    buttons: [{ type: 'reload' }, { type: 'play' }, { type: 'give-up' }],
  };
  render() {
    const { buttons } = this.state;

    return (
      <div className={cn('pause-page')}>
        <div className={cn('pause-page__title')}>{'ПАУЗА'}</div>
        <div className={cn('pause-page__shortcuts-container')}>
          <ShortcutsModule />
        </div>
        <div className={cn('pause-page__game-buttons-container')}>
          {buttons.map(button => (
            <div className={cn('pause-page__game-button-container')}>
              <GameButton type={button.type} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
