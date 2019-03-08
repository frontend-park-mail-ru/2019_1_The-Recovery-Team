import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./EditButton.modules.scss');

const cn = classNames(styles);

export default class EditButton extends React.Component {
  render() {
    return (
        <button className={cn('edit-button')} />
    );
  }
}
