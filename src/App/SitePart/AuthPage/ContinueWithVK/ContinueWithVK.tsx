import SimpleButton from 'components/SimpleButton/SimpleButton';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const img = require('./img/icon.svg');
const styles = require('./ContinueWithVK.modules.scss');
const cn = classNames(styles);

export default class ContinueWithVK extends React.Component {
  render() {
    return (
      <div className={cn('continue-with-vk')}>
        <p className={cn('continue-with-vk__label')}>Или</p>
        <SimpleButton
          className={cn('continue-with-vk__button')}
          addonImage={img}
        >
          Продолжить с ВКонтакте
        </SimpleButton>
      </div>
    );
  }
}
