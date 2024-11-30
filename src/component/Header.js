import React from 'react';
import styles from '../style/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const pageRefresh = () => {
    window.location.reload();
  };
  const icon__dic = process.env.PUBLIC_URL + '/img/ui/header_dictionary.webp';
  const icon__home = process.env.PUBLIC_URL + '/img/ui/header_home.webp';
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__icon}>
          <div className={styles.header__icon__dic} onClick={pageRefresh}>
            <img src={icon__dic}></img>
          </div>
          <h3>새로고침</h3>
        </div>
        <div className={styles.header__icon}>
          <Link to="/">
            <div className={styles.header__icon__home}>
              <img src={icon__home}></img>
            </div>
            <h3>타이틀로</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
