import React from 'react';
import styles from '../style/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        {/* <div className={styles.header__icon}>
          <Link to="/Dictionary">
            <div className={styles.header__icon__dic}></div>
            <h3>무기 도감</h3>
          </Link>
        </div> */}
        <div className={styles.header__icon}>
          <Link to="/">
            <div className={styles.header__icon__home}></div>
            <h3>타이틀로</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
