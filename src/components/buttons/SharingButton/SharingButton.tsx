import { defaultSharingImage } from 'config/images';
import { SharingServices, sharingUrls } from 'config/sharingServices';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./SharingButton.modules.scss');

const cn = classNames(styles);

const DEFAULT_SHARING_TEXT =
  'Я — краб, мне дано выживать! Попробуй и ты на SadIslands';

export default class SharingButton extends React.Component {
  render() {
    const {
      className = '',
      sharingService = SharingServices.VK,
      sharingText = DEFAULT_SHARING_TEXT,
      sharingImage = defaultSharingImage,
    } = this.props;

    const href = sharingUrls[sharingService](sharingText, sharingImage);

    return (
      <a
        className={`${cn(
          'sharing-button',
          `sharing-button_${sharingService}`
        )} ${className}`}
        target="_blank"
        href={href}
      />
    );
  }
}
