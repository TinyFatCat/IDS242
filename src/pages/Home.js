import React from 'react';
import '../style/css_animation.css';
import styles from '../style/Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.vid__1}>
            <video muted autoPlay>
              <source src="/vid/title_logo_particle.webm" type="video/webm" />
            </video>
          </div>
          <div className={styles.vid__2}>
            <video muted autoPlay>
              <source src="/vid/title_logo_img.webm" type="video/webm" />
            </video>
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
        <div className={styles.wrapper__btn}>
          <Link to="/Start">
            <div className={styles.btn}>시작하기</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
