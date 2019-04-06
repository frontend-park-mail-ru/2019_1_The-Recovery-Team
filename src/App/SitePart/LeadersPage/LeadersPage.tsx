import SubmitButton, { modes } from 'components/buttons/SubmitButton';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import RowLeader from './RowLeader';
const styles = require('./LeadersPage.modules.scss');
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import scoreboardStore from 'store/scoreboardStore';
import {
  actionScoreboardLoadPage,
  scoreboardActions,
  UpdateLeadersPL,
} from 'store/scoreboardStore/actions';

const cn = classNames(styles);

const LIMIT = 6;

@connectToCheburstore
export default class LeadersPage extends React.Component {
  state = {
    offset: 0,
    total: 0,
    columns: [
      { title: '#', classesName: 'num' },
      { title: 'Игрок', classesName: 'nick' },
      { title: 'Рейтинг', classesName: 'rating' },
    ],
    leaders: [],
  };

  componentDidMount() {
    scoreboardStore.emit(
      actionScoreboardLoadPage({
        offset: 0,
        limit: LIMIT,
      })
    );
  }

  handleLoadNextPage = () =>
    scoreboardStore.emit(
      actionScoreboardLoadPage({
        limit: LIMIT,
        offset: this.state.offset,
      })
    );

  @onCheburevent(scoreboardStore, scoreboardActions.UPDATE_LEADERS)
  handleUpdateLeaders(action: Action<UpdateLeadersPL>) {
    console.log('here', this.state.leaders);
    this.setState({
      leaders: [...this.state.leaders, ...action.payload.leaders],
      offset: this.state.offset + action.payload.leaders.length,
      total: action.payload.total,
    });
  }

  render() {
    const { columns, leaders, total, offset } = this.state;

    return (
      <div className={cn('leaders-page')}>
        <div className={cn('leaders-page__header-table')}>
          {columns.map(({ title, classesName }) => {
            if (title === 'Рейтинг') {
              return (
                <div
                  className={cn(
                    'leaders-page__header-column',
                    `leaders-page__header-column_${classesName}`
                  )}
                >
                  <div className={cn('leaders-page__container-trophy-icon')}>
                    <div className={cn('leaders-page__trophy-icon')} />
                  </div>
                  <div className={cn('leaders-page__rating-title')}>
                    {title}
                  </div>
                </div>
              );
            }
            return (
              <div
                key={title}
                className={cn(
                  'leaders-page__header-column',
                  `leaders-page__header-column_${classesName}`
                )}
              >
                {title}
              </div>
            );
          })}
        </div>
        <div className={cn('leaders-page__content-table')}>
          {leaders.map((leader, index) => (
            <RowLeader leader={leader} index={index + 1} />
          ))}
        </div>
        <div className={cn('leaders-page__load-button')}>
          {total !== offset && (
            <SubmitButton mode={modes.NEXT} onClick={this.handleLoadNextPage}>
              {'Загрузить ещё'}
            </SubmitButton>
          )}
        </div>
      </div>
    );
  }
}
