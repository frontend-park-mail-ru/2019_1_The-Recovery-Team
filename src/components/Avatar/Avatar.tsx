import * as React from 'libs/Cheburact/index';
import { Link } from 'libs/Cheburouter/index';
import classNames from 'libs/classNames/index';

const styles = require('./Avatar.modules.scss');

const cn = classNames(styles);

export default class Avatar extends React.Component {
  render() {
    const { to, avatar } = this.props;

    return (
      <Link to={to} className={cn('avatar')}>
        <img src={`${avatar}`} className={cn('avatar__img')} />
      </Link>
    );
  }
}
