import React from "react";
import styles from './SearchList.module.scss'

export default function SearchList({data}) {
  let imgUrl = data.snippet.thumbnails.default.url;
  return (
    <div className={styles.videoContent}>
      <div className={styles.imgContent}>
      <img src={imgUrl} alt='video thumbnail' className={styles.thumbnail}></img>
      </div>
      <div className={styles.textContent}>
        <h2>{data.snippet.title}</h2>
        {/* 예시 */}
        <p>조회수 20회</p>
        <p>3개월 전</p>
        <p>{data.snippet.channelTitle}</p>
        <p>{data.snippet.description}</p>
      </div>
    </div>
  )
}