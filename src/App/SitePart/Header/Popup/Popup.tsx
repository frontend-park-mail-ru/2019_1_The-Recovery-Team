import SimpleButton from 'components/SimpleButton/SimpleButton';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const styles = require('./Popup.modules.scss');
const cn = classNames(styles);

export default class Popup extends React.Component {
  render() {
    const { user, onLogout } = this.props;

    return (
      <div className={cn('popup')}>
        <div className={cn('popup__section')}>
          <div className={cn('popup__item-title')}>Место</div>
          <div className={cn('popup__item')}>{`${user.record || 0}`}</div>
        </div>
        <div className={cn('popup__section')}>
          <div className={cn('popup__item-title', 'popup__item_right')}>
            Рейтинг
          </div>
          <div className={cn('popup__item', 'popup__item_right')}>
            {`${user.record || 0}`}
          </div>
        </div>
        <SimpleButton className={cn('popup__button')} onClick={onLogout}>
          Выйти
        </SimpleButton>
      </div>
    );
  }
}
