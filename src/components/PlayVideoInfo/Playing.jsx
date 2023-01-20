import React from 'react';
import styles from './Playing.module.scss';

const Playing = ({ id }) => {
  return (
    <div className={styles.playing} >
      <iframe className={styles.video} src={`//www.youtube.com/embed/${id}?autoplay=1&mute=1`}></iframe>
    </div>
  )
}

export default Playing