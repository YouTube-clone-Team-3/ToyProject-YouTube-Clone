import React from "react";
import styles from "./EachRelatedVideos.module.scss";
import { Link } from "react-router-dom";
import { CalDate } from "../../utils/CalDate";

const EachRelatedVideo = ({ item }) => {
  const video = item.snippet;

  // 조회수와 영상길이는 추가로 요청해와야하는지 질문. 우선 임시데이터
  const views = "82만";
  const date = CalDate(video.publishedAt);

  return (
    <div className={styles.videoCard}>
      <Link to="/">
        {/* {console.log(video)} */}
        <img src={video.thumbnails.medium.url} alt={video.title} />
        <div className={styles.description}>
          <h3>{video.title}</h3>
          <p>{video.channelTitle}</p>
          <span>{`조회수 ${views}회 • ${date} 전`}</span>
        </div>
      </Link>
    </div>
  );
};

export default EachRelatedVideo;
