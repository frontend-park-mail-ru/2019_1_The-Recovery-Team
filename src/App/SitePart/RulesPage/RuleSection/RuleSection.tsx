import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const styles = require('./RuleSection.modules.scss');

const cn = classNames(styles);

export default class RuleSection extends React.Component {
  render() {
    const { rule, ruleClass = '', reverse = true } = this.props;
    const ruleClasses = `${ruleClass}
    ${cn('rule', reverse && 'rule_reverse')}`;

    return (
      <div className={ruleClasses}>
        <img src={`${rule.img}`} className={cn('rule__img')} />
        <div className={cn('rule__info')}>
          <div className={cn('rule__description')}>{rule.description}</div>
        </div>
      </div>
    );
  }
}
