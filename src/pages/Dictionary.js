import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/Dictionary.module.css';

const Dictionary = () => {
  return (
    <div>
      <Link to="/">
        <div className={styles.section} style={{ cursor: 'pointer' }}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <h1>도감 페이지 개설 중</h1>
              <div className={styles.btn__text}>여기를 눌러 진행하기</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Dictionary;
