import MainBlock from 'components/MainBlock';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { members } from './config';
import MemberInfo from './MemberInfo';

const styles = require('./AboutPage.modules.scss');

const cn = classNames(styles);

export default class AboutPage extends React.Component {
  render() {
    return (
      <MainBlock className={cn('about-page')}>
        <div className={cn('about-page__members')}>
          {members.map(member => (
            <MemberInfo
              member={member}
              className={cn('about-page__member-container')}
            />
          ))}
        </div>
      </MainBlock>
    );
  }
}
