import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import MainBlock from '../MainBlock/MainBlock';
import { members } from './config';
import MemberInfo from './MemberInfo/MemberInfo';

const styles = require('./AboutPage.modules.scss');

const cn = classNames(styles);

export default class AboutPage extends React.Component {
  render() {
    return (
      <MainBlock className={cn('about-page')}>
        {members.map(member => (
          <MemberInfo
            member={member}
            memberClass={cn('about-page__member-container')}
          />
        ))}
      </MainBlock>
    );
  }
}
