import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./RowLeader.modules.scss');

const cn = classNames(styles);

export default class RowLeader extends React.Component {
  render() {
    const {leader} = this.props;
    return (
          <div className={cn('leaders-page-row-table')}>
            <div className={cn('leaders-page-row-table__column', 'leaders-page-row-table_num')}>{`${leader.position}`}</div>
            <div className={cn('leaders-page-row-table__column', 'leaders-page-row-table_nick')}>{leader.nickname}</div>
            <div className={cn('leaders-page-row-table__column', 'leaders-page-row-table_rating')}>{`${leader.rating}`}</div>
          </div>
    );
  }
}