import { BASE_URL } from 'config/API';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const styles = require('./RuleSection.modules.scss');

const cn = classNames(styles);

export default class RuleSection extends React.Component {
  render() {
    const { rule, className, reverse = true } = this.props;
    const ruleClasses = `${className} ${
      reverse ? cn('rule', 'rule_reverse') : cn('rule')
    }`;

    return !reverse ? (
      <div className={ruleClasses}>
        <div className={cn('rule__container-img')}>
          <img src={`${BASE_URL}${rule.img}`} className={cn('rule__image')} />
        </div>
        <div className={cn('rule__info')}>
          <div className={cn('rule__title')}>{rule.title}</div>
          <div className={cn('rule__description')}>{rule.description}</div>
        </div>
      </div>
    ) : (
      <div className={ruleClasses}>
        <div className={cn('rule__info')}>
          <div className={cn('rule__title')}>{rule.title}</div>
          <div className={cn('rule__description')}>{rule.description}</div>
        </div>
        <div className={cn('rule__container-img')}>
          <img src={`${BASE_URL}${rule.img}`} className={cn('rule__image')} />
        </div>
      </div>
    );
  }
}
