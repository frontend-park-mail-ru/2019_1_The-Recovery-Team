import MainBlock from 'components/MainBlock';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import RowLeader from './RowLeader';
const styles = require('./LeadersPage.modules.scss');
import SimpleButton from 'components/SimpleButton';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import scoreboardStore from 'store/scoreboardStore';
import {
  actionScoreboardLoad,
  actionScoreboardReset,
  scoreboardActions,
  UpdateLeadersPL,
} from 'store/scoreboardStore/actions';
import { columnTypes } from './config';

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class LeadersPage extends React.Component {
  state = {
    columns: [
      { title: '#', type: columnTypes.COLUMN_NUM },
      { title: 'Игрок', type: columnTypes.COLUMN_NICK },
      {
        title: 'Рейтинг',
        type: columnTypes.COLUMN_RATING,
        iconClass: 'trophy-icon',
      },
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
      <MainBlock className={cn('leaders-page')}>
        <div className={cn('leaders-page__header-table')}>
          {columns.map(({ title, type, iconClass = false }) => {
            const columnClasses = cn(
              'leaders-page__header-column',
              `leaders-page__header-column_${type}`
            );
            const iconComp = iconClass ? (
              <div className={cn('leaders-page__trophy-icon')} />
            ) : null;

            if (type === columnTypes.COLUMN_RATING) {
              return (
                <div key={title} className={columnClasses}>
                  {iconComp}
                  {title}
                </div>
              );
            }
            return (
              <div key={title} className={columnClasses}>
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
        {hasMore && (
          <SimpleButton
            className={cn('leaders-page__load-button')}
            onClick={this.handleLoadNextPage}
          >
            Загрузить ещё
          </SimpleButton>
        )}
      </MainBlock>
    );
  }

  componentWillUnmount() {
    scoreboardStore.emit(actionScoreboardReset());
  }
}
