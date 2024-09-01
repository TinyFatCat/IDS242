import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style/CheckPage.module.css';

const CheckPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/SelectPage'); // SelectPage.js로 돌아가기
  };
  const storedCard = localStorage.getItem('selectedCard');
  console.log({ storedCard });
  return (
    <div
      className={styles.section}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>1 / 4</h1>
          <h2>무기의 종류가 결정되었습니다.</h2>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <h3>MBTI 선택됨</h3>
          </div>
        </div>
        <div className={styles.btn__text}>아무 곳이나 눌러 진행하기</div>
      </div>
    </div>
  );
};

export default CheckPage;
