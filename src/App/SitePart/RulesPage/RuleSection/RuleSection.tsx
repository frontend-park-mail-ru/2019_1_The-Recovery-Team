import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const styles = require('./RuleSection.modules.scss');

const cn = classNames(styles);

export default class RuleSection extends React.Component {
  render() {
    const { rule, className = '', reverse = false } = this.props;
    const ruleClasses = `${className}
    ${cn('rule', reverse && 'rule_reverse')}`;

    return (
      <div className={ruleClasses}>
        <img src={rule.img} className={cn('rule__img')} />
        <div className={cn('rule__info')}>{rule.description}</div>
      </div>
    );
  }
}
