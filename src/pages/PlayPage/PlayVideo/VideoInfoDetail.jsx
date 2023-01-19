import React, { useState, useEffect } from 'react'
import styles from './VideoInfoDetail.module.scss'
import calcNum from '../../../utils/CalNum'
import axios from 'axios'

const VideoInfoDetail = ({ video, channelId }) => {
  const [channel, setChannel] = useState([])
  // const channelId = video[0]?.snippet?.channelId
  // useEffect(() => {
  //   getChannel()
  // }, [])

  // // dummy data 사용

  // async function getChannel() {
  //   const data = await axios.get("http://localhost:3000/channel")
  //   setChannel(data.data.items)
  // }

  // 실제 api 사용
  useEffect(() => {
    getChannel()
  }, [])

  const params = {
    part: ["snippet", "statistics", "contentDetails"],
    key: import.meta.env.VITE_API_KEY,
    id: channelId
  }

  async function getChannel() {
    const data = await axios.get("https://www.googleapis.com/youtube/v3/channels", {
      params,
      paramsSerializer: {
        indexes: null
      }
    })
    setChannel(data.data.items)
  }

  console.log(channel)

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