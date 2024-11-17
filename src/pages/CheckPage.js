import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/CheckPage.module.css';

const CheckPage = () => {
  return (
    <div>
      <Link to="/Final">
        <div className={styles.section} style={{ cursor: 'pointer' }}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <h1>모든 재료가 갖추어졌습니다.</h1>
              <div className={styles.btn__text}>여기를 눌러 진행하기</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CheckPage;
