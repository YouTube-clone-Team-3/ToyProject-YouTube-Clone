import React from 'react'
import Video from './Video'
import Explore from './Explore'
import MoreYoutube from './MoreYoutube'
import ServiceCenter from './ServiceCenter'
import Footer from './Footer'
import styles from './NavBar.module.scss'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Video />
      <Explore />
      <MoreYoutube />
      <ServiceCenter />
      <Footer />
    </div>
  )
}

export default Nav