import React, { useState, useEffect } from 'react'
import styles from './Playing.module.scss'

const Playing = ({ id }) => {
  return (
    <div className={styles.playing} >
      <iframe className={styles.video} src={`//www.youtube.com/embed/${id}`}></iframe>
    </div>
  )
}

export default Playing