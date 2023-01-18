import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Playing.module.scss'
// import video from '../../../data/video.json'

const Playing = () => {
  const [video, setVideo] = useState([])
  // const params = {
  //   part: 'snippet',
  //   part: 'contentDetails',
  //   part: 'player',
  //   part: 'statistics',
  //   id: 'pathName',
  //   key: import.meta.env.VITE_API_KEY
  // }
  useEffect(() => {
    async function getVideo() {
      const data = await axios.get('http://localhost:3000/video')
      setVideo(data.data.items[0])
    }
    getVideo()
  }, [])
  return (
    <div className={styles.playing} >
      <iframe className={styles.video} src={`//www.youtube.com/embed/${video.id}`}></iframe>
    </div>
  )
}

export default Playing