import React, { useEffect, useState } from "react";
import styles from "./EachRelatedVideos.module.scss";
import { Link } from "react-router-dom";
import calcDate from "../../utils/CalDate";
import calcDuration from "../../utils/CalDuration";
import calcNum from "../../utils/CalNum";
import axios from "axios";

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

  const [relatedVideoSearch, setRelatedVideoSearch] = useState([]);

  useEffect(() => {
    async function getInfo() {
      const data = await axios.get("http://localhost:3000/relatedVideoSearch");
      setRelatedVideoSearch(data.data);
    }
    getInfo();
  }, []);

  const video = item.snippet;
  const videoDuration =
    relatedVideoSearch[index]?.data?.items[0].contentDetails.duration;
  const videoViews =
    relatedVideoSearch[index]?.data?.items[0].statistics.viewCount;
  const date = calcDate(video.publishedAt);
  const duration = calcDuration(videoDuration);
  const views = calcNum(videoViews);

  return (
    <div className={styles.videoCard}>
      {relatedVideoSearch.length !== 0 && (
        <Link to="/">
          <div className={styles.thumbnails}>
            <img src={video.thumbnails.medium.url} alt={video.title} />
            <div className={styles.durationBox}>
              <span>{duration}</span>
            </div>
            <div className={styles.hoverBox}>
              <svg viewBox="0 0 24 24">
                <g>
                  <path
                    fill="#ffffff"
                    d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className={styles.hoverBox}>
              <svg viewBox="0 0 24 24">
                <g>
                  <path
                    fill="#ffffff"
                    d="M21,16h-7v-1h7V16z M21,11H9v1h12V11z M21,7H3v1h18V7z M10,15l-7-4v8L10,15z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className={styles.description}>
            <h3>{video.title}</h3>
            <p>{video.channelTitle}</p>
            <span>{`조회수 ${views}회 • ${date} 전`}</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default EachRelatedVideo;
