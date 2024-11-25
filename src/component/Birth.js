import React, { useEffect, useState } from 'react';
import styles from '../style/Birth.module.css';
import { Link } from 'react-router-dom';

const Birth = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [numCombined, setNum3] = useState('');
  const [numValue, setValue] = useState('');
  const [numColor, setColor] = useState('');

  useEffect(() => {
    setNum3(`${num1}${num2}`);
  }, [num1, num2]);

  const increase = (numCheck) => {
    if (numCheck === setNum1) {
      setNum1((prevNum) => (prevNum >= 9 ? 0 : prevNum + 1));
    } else if (numCheck === setNum2) {
      setNum2((prevNum2) => (prevNum2 >= 9 ? 0 : prevNum2 + 1));
    }
  };

  const decrease = (numCheck) => {
    if (numCheck === setNum1) {
      setNum1((prevNum) => (prevNum <= 0 ? 9 : prevNum - 1));
    } else if (numCheck === setNum2) {
      setNum2((prevNum2) => (prevNum2 <= 0 ? 9 : prevNum2 - 1));
    }
  };

  //다음으로 넘어갈 때 데이터 저장
  const saveAndNext = () => {
    const onesPlace = parseInt(numCombined) % 10; // 십의 자리를 제거하여 일의 자리만 남김
    // 일의 자리 값의 범위에 따라 result 값 설정
    if (onesPlace >= 0 && onesPlace <= 1) {
      localStorage.setItem('birth__value', 0);
      localStorage.setItem('birth__color', 'white');
    } else if (onesPlace >= 2 && onesPlace <= 3) {
      localStorage.setItem('birth__value', 1);
      localStorage.setItem('birth__color', 'black');
    } else if (onesPlace >= 4 && onesPlace <= 5) {
      localStorage.setItem('birth__value', 2);
      localStorage.setItem('birth__color', 'blue');
    } else if (onesPlace >= 6 && onesPlace <= 7) {
      localStorage.setItem('birth__value', 3);
      localStorage.setItem('birth__color', 'red');
    } else if (onesPlace >= 8 && onesPlace <= 9) {
      localStorage.setItem('birth__value', 4);
      localStorage.setItem('birth__color', 'yellow');
    }
  };

  //Birth 숫자 변환용
  //일의 자리 숫자만 추출하여 저장

  return (
    <div className={styles.container}>
      <div className={styles.wrapper__text}>
        <h1>당신의 생년(뒷자리)을 입력하세요</h1>
        <h3>이 단계에서 무기의 주요 색상이 결정됩니다</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.btn__cal} onClick={() => increase(setNum1)}>
            +
          </div>
          <div className={styles.num__count}>{num1}</div>
          <div className={styles.btn__cal} onClick={() => decrease(setNum1)}>
            -
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.btn__cal} onClick={() => increase(setNum2)}>
            +
          </div>
          <div className={styles.num__count}>{num2}</div>
          <div className={styles.btn__cal} onClick={() => decrease(setNum2)}>
            -
          </div>
        </div>
        <div className={styles.card__text}>년생</div>
      </div>
      {/* <div>
        <p>현재 값: {numCombined}</p>
      </div> */}
      <Link to="/Zodiac" className={styles.btn} onClick={saveAndNext}>
        결정하기
      </Link>
    </div>
  );
};

export default Birth;
