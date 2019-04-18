import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./MainBlock.modules.scss');

const cn = classNames(styles);

export default class MainBlock extends React.Component {
  render() {
    const { children, className } = this.props;

    const contentClasses = `${className} ${cn('main-block__content')}`;

    return (
      <div className={cn('main-block')}>
        <div class={contentClasses}>{children}</div>
      </div>
    );
  }
}
