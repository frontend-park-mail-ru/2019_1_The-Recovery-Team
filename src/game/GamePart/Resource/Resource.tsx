import * as React from 'libs/Cheburact/index';
import classNames from 'libs/classNames/index';
const styles = require('./Resource.modules.scss');

const cn = classNames(styles);

export default class Resource extends React.Component {
  render() {
    const { resource } = this.props;

    return (
      <div className={cn('resource')}>
        <div
          className={cn(
            'resource__container-icon',
            `resource__container-icon_${resource.type}`
          )}
        />
        <div className={cn('resource__counter')}>{`${resource.number}`}</div>
      </div>
    );
  }
}
