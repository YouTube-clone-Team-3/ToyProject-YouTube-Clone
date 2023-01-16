import React from 'react'
import Video from './Video'
import Subscribe from './Subscribe'
import Explore from './Explore'
import MoreYoutube from './MoreYoutube'
import ServiceCenter from './ServiceCenter'
import Footer from './Footer'

const Nav = () => {
  return (
    <div>
      <Video />
      <Subscribe />
      <Explore />
      <MoreYoutube />
      <ServiceCenter />
      <Footer />
    </div>
  )
}

export default Nav