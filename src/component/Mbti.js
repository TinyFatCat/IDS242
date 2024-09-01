import React, { useState } from 'react';
import styles from '../style/Mbti.module.css';
import { Link } from 'react-router-dom';

const Mbti = () => {
  const [selectedMainCard, setSelectedMainCard] = useState(null);
  const [selectedSmallCard, setSelectedSmallCard] = useState(null);

  //메인 카드 클릭용
  const handleMainCardClick = (card) => {
    setSelectedMainCard(card);
    setSelectedSmallCard(null);
  };

  //스몰 카드 클릭용
  const handleSmallCardClick = (card) => {
    setSelectedSmallCard(selectedSmallCard === card ? null : card);
  };

  //다음 버튼 클릭용
  const handleAcceptClick = () => {
    if (selectedSmallCard) {
      localStorage.setItem('selectedCard', selectedSmallCard);
    }
  };

  //스몰 카드
  const smallCards =
    selectedMainCard === 'A'
      ? ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8']
      : selectedMainCard === 'B'
      ? ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8']
      : [];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1>당신의 MBTI를 선택하세요</h1>
        <h3>이 단계에서 무기의 종류가 결정됩니다</h3>
        {/* 메인 I, E 카드  */}
        <div className={styles.mbti__wrapper}>
          <div
            className={`${styles.mbti__cards} ${
              selectedMainCard === 'A' ? 'active' : ''
            }`}
            onClick={() => handleMainCardClick('A')}
          >
            A
          </div>
          <div
            className={`${styles.mbti__cards} ${
              selectedMainCard === 'B' ? 'active' : ''
            }`}
            onClick={() => handleMainCardClick('B')}
          >
            B
          </div>
        </div>
        {/* 내부 스몰 카드들 */}
        <div className={styles.mbti__wrapper__small}>
          {smallCards.map((card) => (
            <div
              key={card}
              className={`${styles.mbti__cards__small} ${
                selectedSmallCard === card ? styles.selected : ''
              }`}
              onClick={() => handleSmallCardClick(card)}
            >
              {card}
            </div>
          ))}
        </div>
        {/* 다음 넘어가기 버튼 */}
        {selectedSmallCard ? (
          <Link
            to="/CheckPage"
            className={`${styles.btn} ${styles.active}`}
            onClick={handleAcceptClick}
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

export default Mbti;
