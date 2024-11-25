import React from 'react';
import styles from '../style/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const pageRefresh = () => {
    window.location.reload();
  };
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__icon}>
          <div className={styles.header__icon__dic} onClick={pageRefresh}></div>
          <h3>새로고침</h3>
        </div>
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
