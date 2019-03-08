import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import RowLeader from "./RowLeader/RowLeader";
const styles = require('./LeadersPage.modules.scss');

const cn = classNames(styles);

export default class LeadersPage extends React.Component {
  state = {
    columns: [
        {title: '#', classesName: 'num'},
        {title: 'Игрок', classesName: 'nick'},
        {title: 'Рейтинг', classesName: 'rating'},
    ],
    leaders : [
      {nickname: 'Ivan', rating: 500},
      {nickname: 'Daniil', rating: 475},
      {nickname: 'Nikita', rating: 450},
      {nickname: 'Marya', rating: 400},
      {nickname: 'Ivan198', rating: 300},
      {nickname: 'Opa', rating: 250}
    ]
  };

  render() {
    const { columns, leaders } = this.state;

    let count = 0;
    leaders.forEach((leader) => {
      leader['position'] = ++count;
    });

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
              leaders.map((leader) => (<RowLeader leader={leader} />))
            }
          </div>
        </div>
    );
  }
}
