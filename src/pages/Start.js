import React from 'react';
import styles from '../style/Start.module.css';
import { Link } from 'react-router-dom';

const Start = () => {
  const imgUrl1 =
    process.env.PUBLIC_URL + '/img/ui/card_material_icon/mbti.webp';
  const imgUrl2 =
    process.env.PUBLIC_URL + '/img/ui/card_material_icon/birth.webp';
  const imgUrl3 =
    process.env.PUBLIC_URL + '/img/ui/card_material_icon/zodiac.webp';
  const imgUrl4 =
    process.env.PUBLIC_URL + '/img/ui/card_material_icon/constell.webp';
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper__top}>
          <h1>나만의 무기를 만들어보세요</h1>
          <h3>아래 네 가지 재료를 모아 무기를 만들 수 있어요</h3>
        </div>
        <div className={styles.card__container}>
          <div className={styles.card__wrapper}>
            <div className={styles.card}>
              <div className={styles.card__edge}></div>
              <div className={styles.card__label}>MBTI - 성격유형</div>
              <div className={styles.card__bg}>
                <img src={imgUrl1} />
              </div>
            </div>
            <div className={styles.card__text}>무기의 종류가 결정됩니다</div>
          </div>
          <div className={styles.card__wrapper}>
            <div className={styles.card}>
              <div className={styles.card__edge}></div>
              <div className={styles.card__label}>생년</div>
              <div className={styles.card__bg}>
                <img src={imgUrl2} />
              </div>
            </div>
            <div className={styles.card__text}> 주 색상이 결정됩니다</div>
          </div>
          <div className={styles.card__wrapper}>
            <div className={styles.card}>
              <div className={styles.card__edge}></div>
              <div className={styles.card__label}>띠</div>
              <div className={styles.card__bg}>
                <img src={imgUrl3} />
              </div>
            </div>
            <div className={styles.card__text}>무기의 외형이 결정됩니다</div>
          </div>
          <div className={styles.card__wrapper}>
            <div className={styles.card}>
              <div className={styles.card__edge}></div>
              <div className={styles.card__label}>별자리</div>
              <div className={styles.card__bg}>
                <img src={imgUrl4} />
              </div>
            </div>
            <div className={styles.card__text}>무기의 이펙트가 결정됩니다</div>
          </div>
        </div>
        <div className={styles.wrapper__btn}>
          <Link to="/Mbti">
            <div className={styles.btn}>제련 시작</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
