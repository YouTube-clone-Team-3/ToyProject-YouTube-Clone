import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Playing.module.scss'
// import video from '../../../data/video.json'

const Playing = ({ id }) => {
  const [video, setVideo] = useState([])
  // const params = {
  //   part: ['snippet', 'contentDetails', 'player', 'statics'],
  //   id: 'pathName',
  //   key: import.meta.env.VITE_API_KEY
  // }
  useEffect(() => {
    async function getVideo() {
      const data = await axios.get('http://localhost:3000/video')
      // const data = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
      //   params,
      //   paramsSerializer: {
      //     indexes: null
      //   }
      // })
      setVideo(data.data.items[0])
    }
    getVideo()
  }, [])
  return (
    <div className={styles.playing} >
      <iframe className={styles.video} src={`//www.youtube.com/embed/${id}`}></iframe>
    </div>
  )
}

export default Playing