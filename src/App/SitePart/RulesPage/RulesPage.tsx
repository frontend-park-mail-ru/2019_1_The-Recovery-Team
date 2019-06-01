import MainBlock from 'components/MainBlock';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
import { rules } from './config';
import RuleSection from './RuleSection';
const controllers2Img = require('config/img/controllers2.svg');
const controllersImg = require('config/img/controllers.svg');

const styles = require('./RulesPage.modules.scss');

const cn = classNames(styles);

export default class RulesPage extends React.Component {
  render() {
    return (
      <MainBlock className={cn('rules-page__container')}>
        <div className={cn('rules-page')}>
          <div className={cn('rules-page__controllers-container')}>
            <img
              src={controllers2Img}
              className={cn('rules-page__controllers-img')}
            />
            <img
              src={controllersImg}
              className={cn('rules-page__controllers-img')}
            />
          </div>
          {rules.map((rule, idx) => (
            <RuleSection rule={rule} reverse={idx % 2 !== 0} />
          ))}
        </div>
      </MainBlock>
    );
  }
}
