import SubmitButton, { modes } from 'components/buttons/SubmitButton';
import API from 'config/API';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Requester from 'libs/Requester';
import MainBlock from '../MainBlock';
import RowLeader from './RowLeader';
const styles = require('./LeadersPage.modules.scss');

const cn = classNames(styles);

const LIMIT = 6;

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
    this.loadPage(0);
  }

  loadPage = offset =>
    Requester.get(API.scores(), {
      limit: LIMIT,
      start: offset,
    }).then(({ response }: { response: any }) => {
      const { offset, leaders } = this.state;
      if (response && Array.isArray(response.List)) {
        this.setState({
          leaders: [...leaders, ...response.List],
          offset: offset + response.List.length,
          total: response.total,
        });
      }
    });

  handleLoadNextPage = () => this.loadPage(this.state.offset);

  render() {
    const { columns, leaders, total, offset } = this.state;

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
            {total !== offset && (
              <SubmitButton mode={modes.NEXT} onClick={this.handleLoadNextPage}>
                {'Загрузить ещё'}
              </SubmitButton>
            )}
          </div>
        </div>
      </MainBlock>
    );
  }
}
