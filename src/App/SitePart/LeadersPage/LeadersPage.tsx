import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
<<<<<<< HEAD
import Requester from 'libs/Requester/Requester';
import RowLeader from './RowLeader';
=======
import RowLeader from './RowLeader';
import Requester from 'libs/Requester';
>>>>>>> 77fbb3e8dfde7f36e0fb90db021737ef3e88cc99
import API from 'config/API';
import SubmitButton from 'components/buttons/SubmitButton/SubmitButton';
import { modes } from 'components/buttons/SubmitButton';
const styles = require('./LeadersPage.modules.scss');

const cn = classNames(styles);

const LIMIT = 6;

export default class LeadersPage extends React.Component {
  state = {
    offset: 0,
    total: 0,
    columns: [
        {title: '#', classesName: 'num'},
        {title: 'Игрок', classesName: 'nick'},
        {title: 'Рейтинг', classesName: 'rating'},
    ],
    leaders: [],
  };

  componentDidMount() {
    this.loadPage(0);
  };

  loadPage = (offset) =>
      Requester.get(API.scores(), {
        limit: LIMIT,
        start: offset,
      }).then(({response, error}) => {
        const { offset, leaders } = this.state;
        if (response && Array.isArray(response.List)) {
          this.setState({
            leaders: [
                ...leaders,
                ...response.List,
            ],
            offset: offset + response.List.length,
            total: response.total,
          });
        }
      });

  handleLoadNextPage = () => this.loadPage(this.state.offset);

  render() {
    const { columns, leaders, total, offset } = this.state;

    return (
        <div className={cn('leaders-page')}>
          <div className={cn('leaders-page__header-table')}>
            {
              columns.map(({title, classesName}) => {
                if (title === 'Рейтинг') {
                  return (
                      <div className={cn(
                          'leaders-page__header-column',
                          `leaders-page__header-column_${classesName}`)}>
                        <div className={cn('leaders-page__container-trophy-icon')}>
                          <div className={cn('leaders-page__trophy-icon')} />
                        </div>
                        <div className={cn('leaders-page__rating-title')}>{title}</div>
                      </div>
                  );
                } else {
                  return (<div className={cn(
                      'leaders-page__header-column',
                      `leaders-page__header-column_${classesName}`
                  )}>{title}</div>);
                }
              })
            }
          </div>
          <div className={cn('leaders-page__content-table')}>
            {
              leaders.map((leader, index) => (
                  <RowLeader leader={leader} index={index + 1}/>
              ))
            }
          </div>
          <div className={cn('leaders-page__load-button')}>
            {total !== offset && <SubmitButton
                mode={modes.LOAD_MORE}
                onClick={this.handleLoadNextPage}/>}
          </div>
        </div>
    );
  }
}
