import * as React from 'libs/Cheburact/index';
import classNames from 'libs/classNames/index';
const styles = require('./MainBlock.modules.scss');

const cn = classNames(styles);

export default class MainBlock extends React.Component {
  render() {
    const { children, className = '' } = this.props;

    const contentClasses = `${className} ${cn('main-block__content')}`;

    return (
      <div className={cn('main-block')}>
        <div className={contentClasses}>{children}</div>
      </div>
    );
  }
}
