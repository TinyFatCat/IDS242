import React, { useState } from 'react';
import styles from '../style/Constell.module.css';
import { Link } from 'react-router-dom';

const Constell = () => {
  const [setValue, setArray] = useState(null);
  //띠 카드 리스트
  const listName = [
    '양자리',
    '황소자리',
    '쌍둥이자리',
    '게자리',
    '사자자리',
    '처녀자리',
    '천칭자리',
    '전갈자리',
    '궁수자리',
    '염소자리',
    '물병자리',
    '물고기자리',
  ];
  const listDesc = [
    '3월21일-4월19일생',
    '4월20일-5월20일생',
    '5월21일-6월21일생',
    '6월22일-7월22일생',
    '7월23일-8월22일생',
    '8월23일-9월22일생',
    '9월23일-10월22일생',
    '10월23일-11월22일생',
    '11월23일-12월21일생',
    '12월22일-1월19일생',
    '1월20일-2월18일생',
    '2월19일-3월20일생',
  ];

  const [selectedCard, setselectedCard] = useState(null);
  //스몰 카드 클릭용
  const handleSmallCardClick = (card) => {
    setselectedCard(selectedCard === card ? null : card);
  };
  //다음으로 넘어갈 때 데이터 저장
  const saveAndNext = () => {
    if (selectedCard) {
      //데이터 저장('데이터 이름', '데이터')
      localStorage.setItem('constell__selected', selectedCard);
    }
  };

  //값 저장용
  const findIndex = () => {
    const index = listName.findIndex((item) => item === selectedCard);
    if (index !== -1) {
      setArray(index);
      localStorage.setItem('constell__value', index);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1>당신의 별자리를 선택하세요</h1>
        <h3>이 단계에서 무기의 이펙트가 결정됩니다</h3>

        {/* 내부 스몰 카드들 */}
        <div className={styles.wrapper}>
          {listName.map((card, index) => (
            <div
              key={card}
              className={`${styles.constell__card} ${
                selectedCard === card ? styles.selected : ''
              }`}
              onClick={() => handleSmallCardClick(card)}
            >
              <h3>{card}</h3>
              <p>{listDesc[index]}</p>
            </div>
          ))}
        </div>
        {/* 다음 넘어가기 버튼 */}
        {selectedCard ? (
          <Link
            to="/CheckPage"
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
    </div>
  );
};

export default Constell;
