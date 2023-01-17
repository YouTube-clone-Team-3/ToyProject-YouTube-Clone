import React from 'react'
import video from '../../../data/video.json'
import channel from '../../../data/channel.json'
import styles from './VideoInfoDetail.module.scss'
import calcNum from '../../../utils/CalNum'

const VideoInfoDetail = () => {
  const videoInfo = video.items[0]
  const channelInfo = channel.items[0]

  const newLine = (text) => {

  }
  return (
    <div className={styles.detailBox}>
      <div className={styles.channelInfo}>
        <img className={styles.channelProfile} src={channelInfo.snippet.thumbnails.default.url} alt={channelInfo.snippet.title} />
        <div className={styles.channelDes}>
          <span>{channelInfo.snippet.title}</span>
          <span>{calcNum(channelInfo.statistics.subscriberCount)}</span>
        </div>
      </div>
      <button className={styles.subBtn}>구독</button>
      <div className={styles.videoDes} dangerouslySetInnerHTML={{ __html: videoInfo.snippet.description }}></div>
    </div>
  )
}

export default VideoInfoDetail