import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./Logotype.modules.scss');
const cn = classNames(styles);

export default class Logotype extends React.Component {
  render() {
    return (
        <div className={cn(
            'logotype',
            this.props.isLargeLogo && 'logotype_l',
            this.props.isSmallLogo && 'logotype_m',
            this.props.isLogoStart && 'logotype_start')}>
        </div>
    );
  }
}
