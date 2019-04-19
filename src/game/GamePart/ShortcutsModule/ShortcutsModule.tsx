import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Shortcut from './Shortcut/Shortcut';
const styles = require('./ShortcutsModule.modules.scss');

const cn = classNames(styles);

export default class ShortcutsModule extends React.Component {
  state = {
    shortcuts: {
      literal: [
        { obj: 'B', title: 'бомба' },
        { obj: 'S', title: 'песок' },
        { obj: 'Пробел', title: 'круг' },
      ],
      controls: [
        { type: 'top' },
        { type: 'left' },
        { type: 'bottom' },
        { type: 'right' },
      ],
    },
  };

  render() {
    const { shortcuts } = this.state;
    const { className = '' } = this.props;
    const shortcutsClasses = `${className} ${cn('shortcuts')}`;

    return (
      <div className={shortcutsClasses}>
        <div className={cn('shortcuts__column')}>
          {shortcuts.literal.map(shortcut => (
            <div className={cn('shortcuts__container-shortcut')}>
              <Shortcut obj={shortcut.obj} title={shortcut.title} />
            </div>
          ))}
        </div>
        <div className={cn('shortcuts__column')}>
          <div className={cn('shortcuts__container-control')}>
            <div className={cn('shortcuts__container-line')}>
              <div className={cn('shortcuts__container-top-arrow')} />
            </div>
            <div className={cn('shortcuts__container-line')}>
              {shortcuts.controls.map(shortcut =>
                shortcut.type !== 'top' ? (
                  <div
                    className={cn(
                      `shortcuts__container-${shortcut.type}-arrow`
                    )}
                  />
                ) : null
              )}
              <div className={cn('shorcuts__bottom-control-container')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
