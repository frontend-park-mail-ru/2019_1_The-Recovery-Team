import PlayButton, { PlayButtonModes } from 'components/buttons/PlayButton';
import Logotype, { LogotypeSizes } from 'components/Logotype';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./StartPage.modules.scss');

const cn = classNames(styles);

export default class StartPage extends React.Component {
  logoRef = null;
  hidden = false;

  componentDidMount() {
    setInterval(() => {
      this.logoRef.hidden = this.hidden;
      this.hidden = !this.hidden;
    }, 1000);
  }

  render() {
    return (
      <div className={cn('start-page')}>
        <Logotype size={LogotypeSizes.LARGE} />
        <div
          className={cn('start-page__play-buttons')}
          ref={r => (this.logoRef = r)}
        >
          <PlayButton
            className={cn('start-page__play-button')}
            mode={PlayButtonModes.SINGLEPLAYER}
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
