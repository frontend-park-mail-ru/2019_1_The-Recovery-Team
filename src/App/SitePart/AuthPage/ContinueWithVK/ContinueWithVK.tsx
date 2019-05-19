import SimpleButton from 'components/SimpleButton';
import API, { VK_OAUTH_REDIRECT } from 'config/API';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import Requester from 'libs/Requester';

const img = require('./img/icon.svg');
const styles = require('./ContinueWithVK.modules.scss');
const cn = classNames(styles);

const VK_APP_ID = '6989394';

const HREF = Requester.createHref('https://oauth.vk.com/authorize', {
  client_id: VK_APP_ID,
  redirect_uri: VK_OAUTH_REDIRECT,
  group_ids: '',
  v: '5.95',
});

export default class ContinueWithVK extends React.Component {
  render() {
    return (
      <div className={cn('continue-with-vk')}>
        <p className={cn('continue-with-vk__label')}>Или</p>
        <SimpleButton
          className={cn('continue-with-vk__button')}
          addonImage={img}
          href={HREF}
        >
          Продолжить с ВКонтакте
        </SimpleButton>
      </div>
    );
  }
}
