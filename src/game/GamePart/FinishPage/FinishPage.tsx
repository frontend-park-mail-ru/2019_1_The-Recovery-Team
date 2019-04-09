import GameButton from 'components/buttons/GameButton';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { GameModes } from '../../config';
import { FinishTypes } from './config/finishTypes';
const styles = require('./FinishPage.modules.scss');

const cn = classNames(styles);

export default class FinishPage extends React.Component {
  state = {
    buttons: [{ type: 'reload' }, { type: 'profile' }, { type: 'home' }],
    isAuthorized: false,
  };
  render() {
    const { buttons, isAuthorized } = this.state;
    const { mode, finishType } = this.props;
    const title = finishType === FinishTypes.WIN ? 'ПОБЕДА' : 'ПОРАЖЕНИЕ';
    const modeClassName =
      mode === GameModes.SINGLEPLAYER
        ? 'finish-page__title_single'
        : 'finish-page__title_multi';

    return (
      <div className={cn('finish-page')}>
        <div className={cn('finish-page__title', modeClassName)}>{title}</div>
        {mode === GameModes.MULTIPLAYER ? (
          <div className={cn('finish-page__rating')}>{`РЕЙТИНГ ...`}</div>
        ) : null}
        <div className={cn('finish-page__buttons-container')}>
          {buttons.map(button => (
            <div className={cn('finish-page__game-button-container')}>
              <GameButton
                type={button.type}
                isAuthorized={button.type === 'profile' && isAuthorized}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
