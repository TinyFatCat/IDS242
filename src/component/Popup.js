import React from 'react';
import styles from '../style/Popup.module.css';

const Popup = ({ isOpen, onClose, children }) => {
  const cancel_small = process.env.PUBLIC_URL + '/img/ui/cancel_small.svg';
  if (!isOpen) return null; // 팝업이 닫혀 있으면 아무것도 렌더링하지 않음
  return (
    <div className={styles.popup__overlay}>
      <div className={styles.popup__contents}>
        <div className={styles.btn__close} onClick={onClose}>
          <img src={cancel_small} alt="상단 로고" />
        </div>
        <div className={styles.popup__text}>
          <p>1. 위 QR코드를 카메라로 스캔하세요</p>
          <p>2. 링크를 눌러 이동해 이미지를 다운로드하세요</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
