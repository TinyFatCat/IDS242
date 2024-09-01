import React from 'react';
import styles from '../style/Start.module.css';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1>필요한 준비물</h1>
        <h3>오직 이 세 가지만 가지고 있으면 됩니다</h3>
        <div className={styles.wrapper}>
          <div className={styles.card}>MBTI</div>
          <div className={styles.card}>띠(생년)</div>
          <div className={styles.card}>별자리</div>
        </div>
        <Link to="/SelectPage">
          <div className={styles.btn}>제련 시작!</div>
        </Link>
      </div>
    </div>
  );
};

export default Start;
