import * as React from 'libs/Cheburact';
import Logotype from 'components/Logotype/index';
import PlayButton from 'components/buttons/PlayButton/PlayButton';
const styles = require('./StartPage.modules.scss');

export default class StartPage extends React.Component {
  render() {
    return (
        <div className={styles['start-page']}>
          <Logotype
              isLargeLogo={true}
              isSmallLogo={false}
              isLogoStart={true}
          />
          <div className={styles['start-page__play-buttons']}>
            <PlayButton
                isStartPage={true}
                isSinglePlayer={true}/>
            <PlayButton
                isStartPage={true}
                isMultiPlayer={true}/>
          </div>
        </div>
    );
  }
}
