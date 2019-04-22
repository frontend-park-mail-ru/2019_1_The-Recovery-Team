import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const loader = require('./img/Loader.svg');
const styles = require('./SearchPage.modules.scss');

const cn = classNames(styles);

export default class SearchPage extends React.Component {
  render() {
    return (
      <div className={cn('search-page')}>
        <div className={cn('search-page__title')}>ПОИСК ИГРОКА</div>
        <img src={loader} className={cn('search-page__icon')} />
      </div>
    );
  }
}
