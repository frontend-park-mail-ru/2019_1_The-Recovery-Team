import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./EditButton.modules.scss');

const cn = classNames(styles);

export default class EditButton extends React.Component {
  render() {
    const { onClick } = this.props;

    return <button onClick={onClick} className={cn('edit-button')} />;
  }
}
