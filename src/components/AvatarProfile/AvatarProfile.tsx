import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./AvatarProfile.modules.scss');
const noavatar = require('./img/noavatar.svg');

const cn = classNames(styles);

export default class AvatarProfile extends React.Component {
  render() {
    const {
      className = '',
      src,
      buttonClass = '',
      onButtonClick = null,
    } = this.props;

    const classes = `${className} ${cn('avatar-profile')}`;

    return (
      <div className={classes}>
        <img
          src={`${src || noavatar}`}
          className={cn('avatar-profile__image')}
        />
        {onButtonClick && (
          <div
            className={`${buttonClass} ${cn('avatar-profile__button')}`}
            onClick={onButtonClick}
          />
        )}
      </div>
    );
  }
}
