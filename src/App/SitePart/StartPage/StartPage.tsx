import PlayButtonNew, {
  playButtonTypes,
} from 'components/buttons/PlayButtonNew';
import MainBlock from 'components/MainBlock/MainBlock';
import { routeCreators } from 'config/routes';
import { GameModes } from 'game/config';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import SharingButton from 'components/buttons/SharingButton';

const styles = require('./StartPage.modules.scss');

const cn = classNames(styles);

export default class StartPage extends React.Component {
  render() {
    const { authorized = false } = this.props;
    const multiTo = authorized
      ? routeCreators.TO_GAME_PART(GameModes.MULTIPLAYER)
      : routeCreators.TO_SIGN_IN();

    return (
      <MainBlock className={cn('start-page')}>
        <div>
          <div className={cn('start-page__play-buttons')}>
            <PlayButtonNew
              className={cn('start-page__play-button')}
              type={playButtonTypes.SINGLEPLAYER}
              to={routeCreators.TO_GAME_PART(GameModes.SINGLEPLAYER)}
            />
            <PlayButtonNew
              blur={!authorized}
              blurText={!authorized && 'Войти'}
              className={cn('start-page__play-button')}
              type={playButtonTypes.MULTIPLAYER}
              to={multiTo}
            />
            <SharingButton className={cn('start-page__sharing-button')} />
          </div>
        </div>
      </MainBlock>
    );
  }
}
