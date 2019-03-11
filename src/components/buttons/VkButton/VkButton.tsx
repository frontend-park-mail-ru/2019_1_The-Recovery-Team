import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./VkButton.modules.scss');

const cn = classNames(styles);

export default class VkButton extends React.Component {
  render() {
    return (
        <a href='#' className={cn('vk-button')} />
    );
  }
}