import React from 'react';
import Video from './Video';
import Explore from './Explore';
import MoreYoutube from './MoreYoutube';
import ServiceCenter from './ServiceCenter';
import styles from './NavBar.module.scss';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Video />
      <hr className={styles.sectionLine} />
      <span className={styles.navTitle}>탐색</span>
      <Explore />
      <hr className={styles.sectionLine} />
      <span className={styles.navTitle}>YouTube 더보기</span>
      <MoreYoutube />
      <hr className={styles.sectionLine} />
      <ServiceCenter />
    </div>
  )
}

export default Nav