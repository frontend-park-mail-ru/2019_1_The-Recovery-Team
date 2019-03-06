import * as React from 'libs/Cheburact';
import Tabbar from './Tabbar/Tabbar';
import VolumeButton from "components/buttons/VolumeButton/VolumeButton";
import LabelAuthUser from "components/LabelAuthUser/LabelAuthUser";
const styles = require('./Header.modules.scss');

export default class Header extends React.Component {
  render() {
    return (
        <div className={styles['header']}>
          <Tabbar/>
          <div className={`${styles['header__container-buttons']} ${styles['header__container-buttons_start-page']} ${styles['header__container-buttons_auth']}`}>
            <VolumeButton/>
            <LabelAuthUser nickname={'Nagibator228'}/>
          </div>
              {/*className='header__container-buttons header__container-buttons_start-page header__container-buttons_auth'>*/}
            {/*<button className={`${styles['volume-button']} ${styles['volume-button_on']}`} />*/}
            {/*<a href='#' className='label-auth'>*/}
              {/*<div className='label-auth__circle'></div>*/}
              {/*<div className='label-auth__rect'>*/}
                {/*<div className='label-auth__nickname'>Nagibator228</div>*/}
              {/*</div>*/}
            {/*</a>*/}
          {/*</div>*/}
        </div>
    );
  }
}