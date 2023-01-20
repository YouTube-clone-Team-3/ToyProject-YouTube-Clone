import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import videoData from "../../data/videosDetail.json";
import channelData from "../../data/channel.json";
import styles from "./MainList.module.scss";
import calcNum from "../../utils/CalNum";
import calcDate from "../../utils/CalDate";
import calcDuration from "../../utils/CalDuration";
import { FiMoreVertical } from "react-icons/fi";

export default function MainList({ data, i }) {
  const [channel, setChannel] = useState([]);
  const [videoDetail, setVideoDetail] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      setChannel(channelData.items);
      setVideoDetail(videoData.items[i]);
    }
    getData();
  }, []);

  const videoThumbnail = data?.snippet.thumbnails.high.url;
  const channelThumbnail = channel[0]?.snippet.thumbnails.default.url;

  const viewCount = calcNum(videoDetail?.statistics?.viewCount);
  const publishedAt = calcDate(videoDetail?.snippet?.publishedAt);
  const duration = calcDuration(videoDetail?.contentDetails?.duration);

  return (
    <div className={styles.videoContent}>
      <div className={styles.imgContent}>
        <img
          src={videoThumbnail}
          alt="video thumbnail"
          className={styles.thumbnail}
          onClick={() => {
            navigate(`/detail/${data?.id.videoId}`);
          }}
        ></img>
        <p className={styles.duration}>{duration}</p>
      </div>
      <div className={styles.textContent}>
        <div className={styles.leftContent}>
          <img
            src={channelThumbnail}
            alt="channel thumbnail"
            className={styles.channelThumbnail}
          ></img>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.titleContent}>
            <h3
              className={styles.videoTitle}
              onClick={() => {
                navigate(`/detail/${data?.id.videoId}`);
              }}
            >
              {data.snippet.title}
            </h3>
            <FiMoreVertical size="24" className={styles.moreIcon} />
          </div>
          <p className={styles.channelTitle}>{data.snippet.channelTitle}</p>
          <span className={styles.videoView}>
            조회수 {viewCount}회{" "}
            <span className={styles.dot_separator}> • </span> {publishedAt} 전
          </span>
        </div>
      </div>
    </div>
  );
}
