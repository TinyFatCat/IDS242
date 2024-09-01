import React from 'react';
import styles from '../style/Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleImg}>
          <h1>FIND YOUR WEAPON</h1>
          <h3>나만의 무기를 만들어 보세요</h3>
        </div>
        <Link to="/Start">
          <div className={styles.btn}>시작하기</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
