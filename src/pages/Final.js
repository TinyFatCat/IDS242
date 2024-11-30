import React, { useEffect, useState, useRef } from 'react';
import {
  wp_label_name,
  wp_main_txt_list,
  wp_label_appear,
  wp_label_effect,
  wp_label_color,
  wp_sub_txt_list_a,
  wp_sub_txt_list_b,
  wp_sub_txt_list_c,
  wp_spec_1_title,
  wp_spec_2_title,
  wp_spec_3_title,
  wp_spec_1_desc,
  wp_spec_2_desc,
  wp_spec_3_desc,
} from '../list/WpList.js';
import styles from '../style/Final.module.css';
import { Link } from 'react-router-dom';
import domtoimage from 'dom-to-image';
import Popup from '../component/Popup';

const Final = () => {
  //카드에 고정되는 스틸 이미지 파일
  const card__wp__edge__slider__url =
    process.env.PUBLIC_URL + '/img/card_wp/card_wp_edge_slider.webp';
  const card__wp__edges__right__url =
    process.env.PUBLIC_URL + '/img/card_wp/card_wp_edges_right.webp';
  // const card__spec__circle__url =
  //   process.env.PUBLIC_URL + '/img/card_wp/card_spec_circle.webp';
  const card__spec__desc__url =
    process.env.PUBLIC_URL + '/img/card_wp/card_spec_desc.webp';
  const card__wp__bgs__url =
    process.env.PUBLIC_URL + '/img/card_wp/card_wp_bgs.webp';

  //무기 이름 상태 관리(state)
  const mbtiNum = localStorage.getItem('mbti__value');
  const birthNum = localStorage.getItem('birth__value');
  const birthColor = localStorage.getItem('birth__color');
  const zodiacNum = localStorage.getItem('zodiac__value');
  const constellNum = localStorage.getItem('constell__value');

  //종합하여 무기 카드 이미지 불러오기
  const wp__img__mbti = localStorage.getItem('mbti__selected');
  const wp__label__first = wp_label_effect[constellNum];
  const wp__label__sec = wp_label_color[birthNum];
  const wp__label__third = wp_label_appear[zodiacNum];
  const wp__label__fourth = wp_label_name[mbtiNum];
  //
  const wp__url = `/img/weapons/${wp__img__mbti}/${birthColor}__${zodiacNum}.webp`;
  const eff__url = `/img/effects/effect__${constellNum}.webp`;
  //
  const card__wp__logo = `/img/card_wp/logo_find_your_weapon.webp`;
  const wp__img = process.env.PUBLIC_URL + wp__url;
  const effect__img = process.env.PUBLIC_URL + eff__url;
  const wp__main__txt = wp_main_txt_list[zodiacNum];
  const wp__sub__txt1 = wp_sub_txt_list_a[constellNum];
  const wp__sub__txt2 =
    wp_sub_txt_list_b[zodiacNum] + wp_sub_txt_list_c[mbtiNum];

  //팝업 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  //무기 카드 이미지 저장
  const divRef = React.useRef();
  const handleDownload = () => {
    const node = divRef.current;
    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        // 이미지 URL 생성
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'weapon__image.jpg'; // 저장될 파일 이름

        // 링크를 클릭하여 다운로드 시작
        link.click();

        console.log('저장되었습니다');
      })
      .catch(function (error) {
        console.error('이미지 생성 실패:', error);
      });
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper__logo}>
          <img src={card__wp__logo} alt="상단 로고" />
        </div>
        <div ref={divRef} className={styles.card}>
          {/* <div className={styles.card__border}></div> */}
          <div className={styles.card__edge__slider}>
            <img
              src={card__wp__edge__slider__url}
              alt="edge__slider들어가는부분"
            />
          </div>
          <div className={styles.card__wp__inner__contents}>
            <div className={styles.card__wp__weapon__box}>
              <div className={styles.card__wp__weapon__box__wp}>
                <img src={wp__img} alt="무기들어가는부분" />
              </div>
              <div className={styles.card__wp__weapon__box__effect}>
                <img src={effect__img} alt="이펙트들어가는부분" />
              </div>
            </div>
            <div className={styles.card__wp__weapon__txt}>
              <div className={styles.card__wp__edges__right}>
                <img
                  src={card__wp__edges__right__url}
                  alt="card__wp__edges_right들어가는부분"
                />
              </div>
              <div
                className={styles.card__wp__weapon__txt__label}
                alt="card__wp__weapon__txt__label"
              >
                <h2>
                  {wp__label__first +
                    wp__label__sec +
                    wp__label__third +
                    wp__label__fourth}
                </h2>
              </div>
              <div className={styles.card__wp__weapon__txt__desc}>
                <h2 alt="무기 주 설명란">{wp__main__txt}</h2>
                <h3 alt="무기 보조 설명란"> {wp__sub__txt1}</h3>
                <h3 alt="무기 보조 설명란2"> {wp__sub__txt2}</h3>
              </div>
              <div className={styles.card__wp__weapon__spec}>
                <div className={styles.card__wp__weapon__spec__wrapper}>
                  <div className={styles.card__wp__weapon__spec__box}>
                    {/* <div className={styles.card__wp__weapon__spec__circle}>
                      <img
                        src={card__spec__circle__url}
                        alt="card__spec__circle들어가는부분"
                      />
                    </div>
                    <div className={styles.card__wp__weapon__spec__icon}>
                      <img
                        src={icon__url1}
                        alt="card__spec__icon들어가는부분"
                      />
                    </div> */}
                    <h4>{wp_spec_1_title[mbtiNum]}</h4>
                    <p>{wp_spec_1_desc[mbtiNum]}</p>
                    <img
                      src={card__spec__desc__url}
                      alt="card__spec__desc들어가는부분"
                    />
                  </div>
                  <div className={styles.card__wp__weapon__spec__box}>
                    {/* <div className={styles.card__wp__weapon__spec__circle}>
                      <img
                        src={card__spec__circle__url}
                        alt="card__spec__circle들어가는부분"
                      />
                    </div>
                    <div className={styles.card__wp__weapon__spec__icon}>
                      <img
                        src={icon__url2}
                        alt="card__spec__icon들어가는부분"
                      />
                    </div> */}
                    <h4>{wp_spec_2_title[mbtiNum]}</h4>
                    <p>{wp_spec_2_desc[mbtiNum]}</p>
                    <img
                      src={card__spec__desc__url}
                      alt="card__spec__desc들어가는부분"
                    />
                  </div>
                  <div className={styles.card__wp__weapon__spec__box}>
                    {/* <div className={styles.card__wp__weapon__spec__circle}>
                      <img
                        src={card__spec__circle__url}
                        alt={styles.card__spec__circle들어가는부분}
                      />
                    </div>
                    <div className={styles.card__wp__weapon__spec__icon}>
                      <img
                        src={icon__url3}
                        alt="card__spec__icon들어가는부분"
                      />
                    </div> */}
                    <h4>{wp_spec_3_title[mbtiNum]}</h4>
                    <p>{wp_spec_3_desc[mbtiNum]}</p>
                    <img
                      src={card__spec__desc__url}
                      alt={styles.card__spec__desc들어가는부분}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card__wp__bgs}>
            <img src={card__wp__bgs__url} alt="card__wp__bgs들어가는부분" />
          </div>
        </div>
        <div className={styles.wrapper__btn}>
          {/* Popup 컴포넌트 사용 */}
          <Popup isOpen={isPopupOpen} onClose={closePopup}></Popup>
          {/* <div className={styles.btn} onClick={(openPopup, handleDownload)}>
            <h5>저장하기</h5>
            <div className={styles.slash}>QR코드로 이미지를 저장합니다</div>
          </div> */}
          <Link to="/">
            <div className={styles.btn}>
              <h5>다시 만들기</h5>
              <p>처음으로 돌아갑니다</p>
            </div>
          </Link>
        </div>
        <div className={styles.vid__3}>
          <video muted autoPlay>
            <source src="/vid/fire_overlay.webm" type="video/webm" />
          </video>
        </div>
        <div className={styles.vid__4}>
          <video muted autoPlay loop>
            <source src="/vid/fire_particle_loop.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Final;
