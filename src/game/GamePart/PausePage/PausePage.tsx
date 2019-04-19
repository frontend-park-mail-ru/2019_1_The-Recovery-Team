import GameButton from 'components/buttons/GameButton';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Timer from '../Arena/Header/Timer/Timer';
import ShortcutsModule from '../ShortcutsModule/ShortcutsModule';
const styles = require('./PausePage.modules.scss');
import { routeCreators } from 'config/routes';
export const reloadImg = require('config/img/Reload.svg');
export const playImg = require('config/img/Play.svg');
export const giveUpImg = require('config/img/GiveUp.svg');


const cn = classNames(styles);

export default class PausePage extends React.Component {
  render() {
    return (
      <div className={cn('pause-page')}>
        <div className={cn('pause-page__title')}>{'Информация'}</div>
        <Timer withPauseButton={false} />
        <ShortcutsModule
          shortcutsClass={cn('pause-page__shortcuts-container')}
        />
        <div className={cn('pause-page__game-buttons-container')}>
          <GameButton
            buttonClass={cn('pause-page__game-button-container')}
            type={'reload'}
            img={reloadImg}
            to={routeCreators.TO_GAME_PART()}
          />
          <GameButton
            buttonClass={cn('pause-page__game-button-container')}
            type={'play'}
            img={playImg}
            to={routeCreators.TO_GAME_PART()}
          />
          <GameButton
            buttonClass={cn('pause-page__game-button-container')}
            type={'give-up'}
            img={giveUpImg}
            to={routeCreators.TO_FINISH_PAGE()}
          />
        </div>
      </div>
    );
  }
}
