import GameButton from 'components/buttons/GameButton';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import ShortcutsModule from '../ShortcutsModule/ShortcutsModule';
import { buttonsConfig } from './config/buttons';
import Timer from '../Arena/Header/Timer/Timer';
const styles = require('./PausePage.modules.scss');

const cn = classNames(styles);

export default class PausePage extends React.Component {
  render() {
    return (
      <div className={cn('pause-page')}>
        <div className={cn('pause-page__title')}>{'Информация'}</div>
        <Timer withPauseButton={false} />
        <div className={cn('pause-page__shortcuts-container')}>
          <ShortcutsModule />
        </div>
        <div className={cn('pause-page__game-buttons-container')}>
          {buttonsConfig.map(button => (
            <GameButton
              className={cn('pause-page__game-button-container')}
              type={button.type}
              img={button.img}
              to={button.to}
            />
          ))}
        </div>
      </div>
    );
  }
}
