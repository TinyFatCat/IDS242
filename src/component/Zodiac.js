import React, { useState } from 'react';
import styles from '../style/Zodiac.module.css';
import { Link } from 'react-router-dom';

const Zodiac = () => {
  const [selectedCard, setselectedCard] = useState(null);
  const [setValue, setArray] = useState(null);
  //스몰 카드 클릭용
  const handleSmallCardClick = (card) => {
    setselectedCard(selectedCard === card ? null : card);
  };
  //다음으로 넘어갈 때 데이터 저장
  const saveAndNext = () => {
    if (selectedCard) {
      //데이터 저장('데이터 이름', '데이터')
      localStorage.setItem('zodiac__selected', selectedCard);
    }
  };

  // 스몰 카드
  const names = [
    '쥐띠',
    '소띠',
    '호랑이띠',
    '토끼띠',
    '용띠',
    '뱀띠',
    '말띠',
    '양띠',
    '원숭이띠',
    '닭띠',
    '개띠',
    '돼지띠',
  ];
  const descs = [
    '자(子)',
    '축(丑)',
    '인(寅)',
    '묘(卯)]',
    '진(辰)',
    '사(巳)',
    '오(午)',
    '미(未)',
    '신(申)',
    '유(酉)',
    '술(戌)',
    '해(亥)',
  ];

  //값 저장용
  const findIndex = () => {
    const index = names.findIndex((item) => item === selectedCard);
    if (index !== -1) {
      setArray(index);
      localStorage.setItem('zodiac__value', index);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper__text}>
          <h1>당신의 띠를 선택하세요</h1>
          <h3>이 단계에서 무기의 외형이 결정됩니다</h3>
        </div>
        {/* 내부 스몰 카드들 */}
        <div className={styles.wrapper}>
          {names.map((card, index) => (
            <div
              key={card}
              className={`${styles.zodiac__card} ${
                selectedCard === card ? styles.selected : ''
              }`}
              onClick={() => handleSmallCardClick(card)}
            >
              <h3>{card}</h3>
              <p>{descs[index]}</p>
            </div>
          ))}
        </div>
        {/* 다음 넘어가기 버튼 */}
        {selectedCard ? (
          <Link
            to="/Constell"
            className={`${styles.btn} ${styles.active}`}
            onClick={(saveAndNext, findIndex)}
          >
            결정하기
          </Link>
        ) : (
          <div className={styles.btn}>선택을 기다리는 중</div>
        )}
      </div>
    </div>
  );
};

export default Zodiac;
