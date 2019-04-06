import LabelAuthUser from 'components/LabelAuthUser';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Resource from './Resource';
import Timer from './Timer';
const styles = require('./GamePart.modules.scss');

const cn = classNames(styles);

export default class GamePart extends React.Component {
  state = {
    user: {
      nickname: 'opana',
    },
    opponent: null,
    resources: [
      { type: 'lifebuoy', number: 0 },
      { type: 'sand', number: 0 },
      { type: 'bomb', number: 0 },
    ],
  };

  public render() {
    return (
      <div className={cn('game-part')}>
        <div className={cn('game-part__header')}>
          <div
            className={cn(
              'game-part__label-container',
              'game-part__label-container_left'
            )}
          >
            <LabelAuthUser user={this.state.user} reverse={true} />
          </div>
          <div className={cn('game-part__timer-container')}>
            <Timer />
          </div>
        </div>
        <div className={cn('game-part__resources')}>
          {this.state.resources.map(resource => (
            <div className={cn('game-part__container-resource')}>
              <Resource resource={resource} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
