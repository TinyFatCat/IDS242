import React from 'react';
import styles from '../style/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__text__wrapper}>
        <p>FIND YOUR WEAPON</p>
        <p>나만의 무기를 찾으세요</p>
      </div>
    </div>
  );
};

export default Header;
