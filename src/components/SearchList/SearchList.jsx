import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from './SearchList.module.scss'

export default function SearchList({data}) {
  const [channel, setChannel] = useState([]);

  let channelId = data?.snippet.channelId;
  const params = {
    part: 'snippet',
    id: channelId,
    maxResults: 1,
    key: import.meta.env.VITE_API_KEY,
  }

  useEffect(() => {
    async function getData() {
      const data = await axios.get('https://www.googleapis.com/youtube/v3/channels', { params });
      setChannel(data.data.items);
    }
    getData();
  }, []);

  console.log(channel);

  let videoThumbnail = data?.snippet.thumbnails.medium.url;
  let channelThumbnail = channel?.snippet.thumbnails.default.url;

  return (
    <div className={styles.videoContent}>
      <div className={styles.imgContent}>
        <img src={videoThumbnail} alt='video thumbnail' className={styles.thumbnail}></img>
      </div>
      <div className={styles.textContent}>
        <h3>{data.snippet.title}</h3>
        {/* 조회수랑 기간은 예시로 적어 놓았습니다~~ */}
        <span>조회수 20회 <span className={styles.dot_separator}> • </span> 3개월 전</span>
        <img src={channelThumbnail} alt='channel thumbnail' className={styles.channelThumbnail}></img>
        <p className={styles.channelTitle}>{data.snippet.channelTitle}</p>
        <p>{data.snippet.description}</p>
      </div>
    </div>
  )
}