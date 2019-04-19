import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { rules } from './config';
import RuleSection from './RuleSection';
import MainBlock from '../MainBlock/MainBlock';
const styles = require('./RulesPage.modules.scss');

const cn = classNames(styles);

export default class RulesPage extends React.Component {
  render() {
    return (
      <MainBlock className={cn('rules-page')}>
        {rules.map((rule, idx) => {
          const reverse = idx % 2 !== 0;
          return (
            <RuleSection
              rule={rule}
              reverse={reverse}
              ruleClass={cn('rules-page__rule-container')}
            />
          );
        })}
      </MainBlock>
    );
  }
}
