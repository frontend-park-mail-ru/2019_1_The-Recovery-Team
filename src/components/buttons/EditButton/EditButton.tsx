import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./EditButton.modules.scss');

const cn = classNames(styles);

export default class EditButton extends React.Component {
  render() {
    const { onClick, buttonClass = '' } = this.props;
    const buttonClasses = `${buttonClass} ${cn('edit-button')}`;

    return <button onClick={onClick} className={buttonClasses} />;
  }
}
