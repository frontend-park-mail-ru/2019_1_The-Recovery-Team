import * as React from 'libs/Cheburact/index';
import classNames from 'libs/classNames/index';
import Footer from '../../App/SitePart/Footer/Footer';
const styles = require('./MainBlock.modules.scss');

const cn = classNames(styles);

export default class MainBlock extends React.Component {
  render() {
    const { children, className = '' } = this.props;
    const classes = `${className} ${cn('main-block__children')}`;

    return (
      <div className={cn('main-block')}>
        <div className={classes}>{children}</div>
        <Footer />
      </div>
    );

    /*const contentClasses = `${className} ${cn('main-block__content')}`;

    return (
      <div className={cn('main-block')}>
        <div className={contentClasses}>{children}</div>
      </div>
    );*/
  }
}
