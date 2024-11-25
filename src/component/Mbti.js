import React, { useState } from 'react';
import styles from '../style/Mbti.module.css';
import { Link } from 'react-router-dom';

const Mbti = () => {
  const [selectedMainCard, setSelectedMainCard] = useState(null);
  const [selectedSmallCard, setSelectedSmallCard] = useState(null);
  const [setValue, setArray] = useState(null);
  const mbtiList = [
    'INFP',
    'INFJ',
    'INTP',
    'INTJ',
    'ISFP',
    'ISFJ',
    'ISTP',
    'ISTJ',
    'ENFP',
    'ENFJ',
    'ENTP',
    'ENTJ',
    'ESFP',
    'ESFJ',
    'ESTP',
    'ESTJ',
  ];

  //메인 카드 클릭용
  const handleMainCardClick = (card) => {
    setSelectedMainCard(card);
    setSelectedSmallCard(null);
  };

  //스몰 카드 클릭용
  const handleSmallCardClick = (card) => {
    setSelectedSmallCard(selectedSmallCard === card ? null : card);
  };

  //다음으로 넘어갈 때 데이터 저장
  const saveAndNext = () => {
    //데이터 저장('데이터 이름', '데이터')
    localStorage.setItem('mbti__selected', selectedSmallCard);
  };

  //값 저장용
  const findIndex = () => {
    const index = mbtiList.findIndex((item) => item === selectedSmallCard);
    if (index !== -1) {
      setArray(index);
      localStorage.setItem('mbti__value', index);
    }
  };

  //스몰 카드
  const smallCards =
    selectedMainCard === 'A'
      ? ['INFP', 'INFJ', 'INTP', 'INTJ', 'ISFP', 'ISFJ', 'ISTP', 'ISTJ']
      : selectedMainCard === 'B'
      ? ['ENFP', 'ENFJ', 'ENTP', 'ENTJ', 'ESFP', 'ESFJ', 'ESTP', 'ESTJ']
      : [];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper__top}>
          <h1>당신의 MBTI를 선택하세요</h1>
          <h3>이 단계에서 무기의 종류가 결정됩니다</h3>
        </div>
        {/* 메인 I, E 카드  */}
        <div className={styles.mbti__wrapper}>
          <div
            className={`${styles.mbti__cards} ${
              selectedMainCard === 'A' ? 'active' : ''
            }`}
            onClick={() => handleMainCardClick('A')}
          >
            I
          </div>
          <div
            className={`${styles.mbti__cards} ${
              selectedMainCard === 'B' ? 'active' : ''
            }`}
            onClick={() => handleMainCardClick('B')}
          >
            E
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
        <div className={styles.wrapper}>
          {selectedSmallCard ? (
            <Link
              to="/Birth"
              className={`${styles.btn} ${styles.active}`}
              onClick={() => {
                saveAndNext();
                findIndex();
              }}
            >
              결정하기
            </Link>
          ) : (
            <div className={styles.btn}>선택을 기다리는 중</div>
          )}
        </div>
        {/* 다음 넘어가기 버튼 */}
      </div>
    </div>
  );
};

export default Mbti;
