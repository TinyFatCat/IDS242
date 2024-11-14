import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/Making.module.css';

const CheckPage = () => {
  return (
    <div>
      <Link to="/Final">
        <div className={styles.section} style={{ cursor: 'pointer' }}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <h1>무기 제작 중</h1>
              <div className={styles.btn__text}>여기를 눌러 진행하기</div>
            </div>
            <div className={styles.btn__text}></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CheckPage;
