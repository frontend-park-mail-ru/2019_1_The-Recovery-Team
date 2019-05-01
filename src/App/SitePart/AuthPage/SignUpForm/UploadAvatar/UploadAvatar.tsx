import AvatarProfile from 'components/AvatarProfile/AvatarProfile';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';

const noavatar = require('./img/noavatar.svg');
const styles = require('./UploadAvatar.modules.scss');
const cn = classNames(styles);

export default class UploadAvatar extends React.Component {
  state = {
    src: '',
  };

  handleAvatarSelected = e => {
    const { onChange = () => null } = this.props;
    const file = e.currentTarget.files[0] || null;
    if (file) {
      onChange(file);
    }
  };

  updateAvatar = () => {
    const { avatar = null } = this.props;
    if (!avatar) {
      this.setState({ src: null });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(avatar);
    reader.onload = () => {
      this.setState({ src: reader.result });
    };
  };

  handleAvatarReset = () => {
    const { onChange = () => null } = this.props;
    onChange(null);
  };

  componentDidMount() {
    this.updateAvatar();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.avatar !== this.props.avatar) {
      this.updateAvatar();
    }
  }

  render() {
    const { src } = this.state;
    const { className = '' } = this.props;

    const inputClass = cn('upload-avatar__input');

    return (
      <div className={`${className} ${cn('upload-avatar')}`}>
        <AvatarProfile
          src={src || noavatar}
          className={cn('upload-avatar__preview-container')}
          buttonClass={cn('upload-avatar__preview-reset')}
          onButtonClick={src ? this.handleAvatarReset : null}
        />
        <label
          type="file"
          className={cn('upload-avatar__label')}
          for={inputClass}
        >
          Загрузить фото
        </label>
        <input
          name={inputClass}
          id={inputClass}
          className={inputClass}
          type="file"
          accept="image/*"
          onChange={this.handleAvatarSelected}
        />
      </div>
    );
  }
}
