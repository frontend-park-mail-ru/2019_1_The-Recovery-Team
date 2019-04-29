import PlayButton from 'components/buttons/PlayButtonNew';
import { playButtonTypes } from 'components/buttons/PlayButtonNew/modes';
import MainBlock from 'components/MainBlock/MainBlock';
import { routeCreators } from 'config/routes';
import { GameModes } from 'game/config';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const styles = require('./StartPage.modules.scss');

const cn = classNames(styles);

export default class StartPage extends React.Component {
  render() {
    const { authorized = false } = this.props;

    return (
      <MainBlock className={cn('start-page')}>
        <div>
          <div className={cn('start-page__play-buttons')}>
            <PlayButton
              className={cn('start-page__play-button')}
              type={playButtonTypes.single}
              to={routeCreators.TO_GAME_PART(GameModes.SINGLEPLAYER)}
            />
            <PlayButton
              className={cn('start-page__play-button')}
              type={playButtonTypes.multi}
              to={routeCreators.TO_GAME_PART(GameModes.MULTIPLAYER)}
            />
          </div>
        </div>
      </MainBlock>
    );

    /*return (
      <div className={cn('start-page')}>
        <Logotype size={LogotypeSizes.LARGE} />
        <div className={cn('start-page__play-buttons')}>
          <PlayButton
            className={cn('start-page__play-button')}
            mode={PlayButtonModes.SINGLEPLAYER}
            to={routeCreators.TO_GAME_PART(GameModes.SINGLEPLAYER)}
          />
          <PlayButton
            className={cn('start-page__play-button')}
            isBlur={!authorized}
            title={'ВОЙТИ'}
            mode={PlayButtonModes.MULTIPLAYER}
            to={
              authorized
                ? routeCreators.TO_GAME_PART(GameModes.MULTIPLAYER)
                : routeCreators.TO_SIGN_IN()
            }
          />
        </div>
      </div>
    );*/
  }
}
