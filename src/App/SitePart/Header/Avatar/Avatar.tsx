import * as React from 'libs/Cheburact';
import { Link } from 'libs/Cheburouter';
import classNames from 'libs/classNames';

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
