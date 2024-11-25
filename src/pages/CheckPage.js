import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/CheckPage.module.css';

const CheckPage = () => {
  return (
    <div>
      <Link to="/Final">
        <div className={styles.section} style={{ cursor: 'pointer' }}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <h1>모든 재료가 갖추어졌습니다.</h1>
              <div className={styles.btn__text}>
                아무 곳이나 누르면 무기 카드가 나타납니다
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vid__4}>
          <video muted autoPlay loop>
            <source src="/vid/fire_particle_loop.webm" type="video/webm" />
          </video>
        </div>
      </Link>
    </div>
  );
};

export default CheckPage;
