import MainBlock from 'components/MainBlock';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { rules } from './config';
import RuleSection from './RuleSection';
const styles = require('./RulesPage.modules.scss');

const cn = classNames(styles);

export default class RulesPage extends React.Component {
  render() {
    return (
      <MainBlock className={cn('rules-page__container')}>
        <div className={cn('rules-page')}>
          {rules.map((rule, idx) => (
            <RuleSection rule={rule} reverse={idx % 2 !== 0} />
          ))}
        </div>
      </MainBlock>
    );
  }
}
