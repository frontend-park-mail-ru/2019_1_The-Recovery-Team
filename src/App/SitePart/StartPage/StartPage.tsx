import PlayButton, { PlayButtonModes } from 'components/buttons/PlayButton';
import Logotype, { LogotypeSizes } from 'components/Logotype';
import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./StartPage.modules.scss');

const cn = classNames(styles);

export default class StartPage extends React.Component {
  render() {
    return (
      <div className={cn('start-page')}>
        <Logotype size={LogotypeSizes.LARGE} />
        <div className={cn('start-page__play-buttons')}>
          <PlayButton
            className={cn('start-page__play-button')}
            mode={PlayButtonModes.SINGLEPLAYER}
            to={routeCreators.TO_GAME_PART()}
          />
          <PlayButton
            className={cn('start-page__play-button')}
            mode={PlayButtonModes.MULTIPLAYER}
          />
        </div>
      </div>
    );
  }
}
