import React, { useEffect } from "react";
import styles from "./EachRelatedVideos.module.scss";
import { Link } from "react-router-dom";
import { calcDate } from "../../utils/CalDate";
import { calcDuration } from "../../utils/CalDuration";
import calcNum from "../../utils/CalNum";
import axios from "axios";
import datas from "../../data/relatedVideoSearch.json";

const EachRelatedVideo = ({ item, index }) => {
  // 배포때는 아래의 로직 사용하면 됨. key만 교체?
  // const params = {
  //   part: ["snippet", "contentDetails", "player", "statistics"],
  //   id: item.id.videoId,
  //   key: "AIzaSyD08Wd5NaXlc9Gs6pP_83Hdxiuj5RM_lKA",
  // };

  // useEffect(() => {
  //   async function getData() {
  //     const data = await   axios.get(
  //       "https://www.googleapis.com/youtube/v3/videos",
  //       {
  //         params,
  //         paramsSerializer: {
  //           indexes: null, // by default: false
  //         },
  //       }
  //     );
  //     console.log(data);
  //   }
  //   getData();
  // }, []);

  const video = item.snippet;

  const videoDuration = datas[index].data.items[0].contentDetails.duration;
  const videoViews = datas[index].data.items[0].statistics.viewCount;
  const date = calcDate(video.publishedAt);
  const duration = calcDuration(videoDuration);
  const views = calcNum(videoViews);

  return (
    <div className={styles.videoCard}>
      <Link to="/">
        <div className={styles.thumbnails}>
          <img src={video.thumbnails.medium.url} alt={video.title} />
          <div className={styles.durationBox}>
            <span>{duration}</span>
          </div>
        </div>
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
