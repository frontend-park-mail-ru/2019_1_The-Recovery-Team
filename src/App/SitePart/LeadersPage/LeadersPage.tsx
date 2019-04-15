import SubmitButton, { modes } from 'components/buttons/SubmitButton';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import MainBlock from '../MainBlock';
import RowLeader from './RowLeader';
const styles = require('./LeadersPage.modules.scss');
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import scoreboardStore from 'store/scoreboardStore';
import {
  actionScoreboardLoad,
  actionScoreboardReset,
  scoreboardActions,
  UpdateLeadersPL,
} from 'store/scoreboardStore/actions';

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class LeadersPage extends React.Component {
  state = {
    columns: [
      { title: '#', classesName: 'num' },
      { title: 'Игрок', classesName: 'nick' },
      { title: 'Рейтинг', classesName: 'rating' },
    ],
    leaders: [],
    hasMore: true,
  };

  componentDidMount() {
    this.handleLoadNextPage();
  }

  handleLoadNextPage = () => scoreboardStore.emit(actionScoreboardLoad());

  @onCheburevent(scoreboardStore, scoreboardActions.LOAD_SUCCESS)
  handleUpdateLeaders(action: Action<UpdateLeadersPL>) {
    this.setState({
      leaders: action.payload.leaders,
      hasMore: action.payload.hasMore,
    });
  }

  render() {
    const { columns, leaders, hasMore } = this.state;

    return (
      <MainBlock>
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
            {hasMore && (
              <SubmitButton mode={modes.NEXT} onClick={this.handleLoadNextPage}>
                {'Загрузить ещё'}
              </SubmitButton>
            )}
          </div>
        </div>
      </MainBlock>
    );
  }

  componentWillUnmount() {
    scoreboardStore.emit(actionScoreboardReset());
  }
}
