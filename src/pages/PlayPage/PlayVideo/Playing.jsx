import React from 'react'
import styles from './Playing.module.scss'
import video from '../../../data/video.json'

const Playing = () => {
  const videoInfo = video.items[0]
  return (
    <div className={styles.playing}>
      <iframe className={styles.video} src={`//www.youtube.com/embed/${videoInfo.id}`}></iframe>
    </div>
  )
}

export default Playing