import * as React from 'libs/Cheburact';
const styles = require('./Header.modules.scss');

export default class Header extends React.Component {
  render() {
    return (
        <div className={styles['header']}>
          <div className={styles['navigation']}>
            <div className={styles['tabbar']}>
              <a href='#' className={styles['tabbar__tab']}>Играть</a>
              <a href='#' className={styles['tabbar__tab']}>Правила</a>
              <a href='#' className={styles['tabbar__tab']}>Лидеры</a>
              <a href='#' className={styles['tabbar__tab']}>О нас</a>
            </div>
          </div>
          {/*<div*/}
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
