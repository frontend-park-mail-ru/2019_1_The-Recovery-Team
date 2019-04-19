import GameButton from 'components/buttons/GameButton';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Timer from '../Arena/Header/Timer/Timer';
import ShortcutsModule from '../ShortcutsModule/ShortcutsModule';
const styles = require('./PausePage.modules.scss');
import { buttonTypes } from 'components/buttons/GameButton/config';
import { giveUpImg, playImg, reloadImg } from 'config/images';
import { routeCreators } from 'config/routes';

const cn = classNames(styles);

export default class PausePage extends React.Component {
  render() {
    return (
      <div className={cn('pause-page')}>
        <div className={cn('pause-page__title')}>{'Информация'}</div>
        <Timer withPauseButton={false} />
        <ShortcutsModule className={cn('pause-page__shortcuts-container')} />
        <div className={cn('pause-page__game-buttons-container')}>
          <GameButton
            className={cn('pause-page__game-button-container')}
            type={buttonTypes.RELOAD}
            img={reloadImg}
            to={routeCreators.TO_GAME_PART()}
          />
          <GameButton
            className={cn('pause-page__game-button-container')}
            type={buttonTypes.PLAY}
            img={playImg}
            to={routeCreators.TO_GAME_PART()}
          />
          <GameButton
            className={cn('pause-page__game-button-container')}
            type={buttonTypes.GIVE_UP}
            img={giveUpImg}
            to={routeCreators.TO_FINISH_PAGE()}
          />
        </div>
      </div>
    );
  }
}
