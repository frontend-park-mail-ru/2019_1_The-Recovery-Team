import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import MainBlock from '../MainBlock/MainBlock';
import { rules } from './config/rules';
import RuleSection from './RuleSection';
const styles = require('./RulesPage.modules.scss');

const cn = classNames(styles);

export default class RulesPage extends React.Component {
  render() {
    let reverse = true;

    return (
      <MainBlock className={cn('rules-page')}>
        {rules.map(rule => {
          reverse = !reverse;
          return (
            <RuleSection
              rule={rule}
              reverse={reverse}
              className={cn('rules-page__rule-container')}
            />
          );
        })}
      </MainBlock>
    );
  }
}
