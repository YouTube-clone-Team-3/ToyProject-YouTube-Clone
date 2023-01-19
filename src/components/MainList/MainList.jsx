import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import videoData from '../../data/video.json'
import channelData from '../../data/channel.json'
import styles from './MainList.module.scss'
import calcNum from "../../utils/CalNum"
import calcDate from "../../utils/CalDate"
import calcDuration from "../../utils/CalDuration"
import { FiMoreVertical } from 'react-icons/fi'

export default function MainList({ data }) {
  const [channel, setChannel] = useState([]);
  const [videoDetail, setVideoDetail] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      setChannel(channelData.items);
      setVideoDetail(videoData.items);
    }
    getData()
  }, []);

  const videoThumbnail = data?.snippet.thumbnails.medium.url;
  const channelThumbnail = channel[0]?.snippet.thumbnails.default.url;

  const viewCount = calcNum(videoDetail[0]?.statistics.viewCount);
  const publishedAt = calcDate(videoDetail[0]?.snippet.publishedAt);
  const duration = calcDuration(videoDetail[0]?.contentDetails.duration);

  return (
    <div className={styles.videoContent}>
      <div className={styles.imgContent}>
        <img src={videoThumbnail} alt='video thumbnail' className={styles.thumbnail}></img>
        <p className={styles.duration}>{duration}</p>
      </div>
      <div className={styles.textContent}>
        <div className={styles.leftContent}>
        <img src={channelThumbnail} alt='channel thumbnail' className={styles.channelThumbnail}></img>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.titleContent}>
            <h3 onClick={() =>{ navigate(`/detail/${videoDetail[0]?.id}`) }}>{data.snippet.title}</h3>
            <FiMoreVertical size='24' className={styles.moreIcon} />
          </div>
        <span>조회수 {viewCount}회 <span className={styles.dot_separator}> • </span> {publishedAt} 전</span>
        <div className={styles.channelInfo}>
          <span className={styles.channelTitle}>{data.snippet.channelTitle}</span>
        </div>
        </div>
      </div>
    </div>
  )
}