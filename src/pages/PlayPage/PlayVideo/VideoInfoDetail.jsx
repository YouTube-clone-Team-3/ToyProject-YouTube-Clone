import React, { useState, useEffect } from 'react'
import styles from './VideoInfoDetail.module.scss'
import calcNum from '../../../utils/CalNum'
import axios from 'axios'

const VideoInfoDetail = ({ id }) => {
  const [video, setVideo] = useState([])
  const [channel, setChannel] = useState([])
  useEffect(() => {
    getVideo()
    getChannel()
  }, [])

  // dummy data 사용
  async function getVideo() {
    const data = await axios.get('http://localhost:3000/video')
    setVideo(data.data.items)
  }

  async function getChannel() {
    const data = await axios.get("http://localhost:3000/channel")
    setChannel(data.data.items)
  }

  // 실제 api 사용
  // const params = {
  //   part: ['snippet', 'contentDetails', 'player', 'statistics'],
  //   id: id,
  //   key: import.meta.env.VITE_API_KEY
  // }
  // useEffect(() => {
  //   async function getVideo() {
  //     const data = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
  //       params,
  //       paramsSerializer: {
  //         indexes: null
  //       }
  //     })
  //     setVideo(data.items)
  //   }
  //   getVideo()
  // }, [])

  const channelTitle = channel[0]?.snippet?.title
  const channelThumb = channel[0]?.snippet?.thumbnails.default.url
  const channelSubscribe = calcNum(channel[0]?.statistics?.subscriberCount)
  const videoDes = video[0]?.snippet?.description

  return (
    <div className={styles.detailBox}>
      {
        channel ? (
          <div className={styles.channelInfo}>
            <img className={styles.channelProfile} src={channelThumb} alt={channelTitle} />
            <div className={styles.channelDes}>
              <span>{channelTitle}</span>
              <span>{channelSubscribe}</span>
            </div>
          </div>
        ) : null
      }
      <button className={styles.subBtn}>구독</button>
      {
        video ? (
          <div className={styles.videoDes}>
            {videoDes}
          </div>
        ) : null
      }
    </div>
  )
}

export default VideoInfoDetail