import PlayButtonNew, {
  playButtonTypes,
} from 'components/buttons/PlayButtonNew';
import { routeCreators } from 'config/routes';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
// import ShortcutsModule from '../ShortcutsModule/ShortcutsModule';
const styles = require('./PausePage.modules.scss');

const cn = classNames(styles);

export default class PausePage extends React.Component {
  render() {
    const { mode, isOpen, onClose } = this.props;

    return (
      <div className={cn('pause-page', isOpen && 'pause-page_open')}>
        <div className={cn('pause-page__title')}>Информация</div>
        <div className={cn('pause-page__game-buttons-container')}>
          <PlayButtonNew
            className={cn('pause-page__game-button-container')}
            type={playButtonTypes.RESTART}
            to={routeCreators.TO_GAME_PART(mode)}
          />
          <PlayButtonNew
            className={cn('pause-page__game-button-container')}
            type={playButtonTypes.PLAY}
            onClick={onClose}
          />
          <PlayButtonNew
            className={cn('pause-page__game-button-container')}
            type={playButtonTypes.FINISH}
            to={routeCreators.TO_FINISH_PAGE()}
          />
          {/*<ShortcutsModule className={cn('pause-page__shortcuts-container')} />*/}
        </div>
      </div>
    );
  }
}
