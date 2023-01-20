import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./SearchList.module.scss";
import calcNum from "../../utils/CalNum";
import calcDate from "../../utils/CalDate";
import calcDuration from "../../utils/CalDuration";
import channelData from "../../data/channel.json";
import videoData from "../../data/videosDetail.json";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { HiOutlineClock } from "react-icons/hi";
import { RiPlayList2Fill } from "react-icons/ri";

export default function SearchList({ data, i }) {
  const [channel, setChannel] = useState([]);
  const [video, setVideo] = useState([]);
  const navigate = useNavigate();

  let channelId = data?.snippet.channelId;
  const params = {
    part: "snippet",
    id: channelId,
    maxResults: 1,
    key: import.meta.env.VITE_API_KEY,
  };

  useEffect(() => {
    async function getData() {
      // const data = await axios.get('https://www.googleapis.com/youtube/v3/channels', { params });
      setChannel(channelData.items);
      setVideo(videoData.items[i]);
    }
    getData();
  }, []);

  const videoThumbnail = data?.snippet.thumbnails.high.url;
  const channelThumbnail = channel[0]?.snippet.thumbnails.default.url;

  const viewCount = calcNum(video?.statistics.viewCount);
  const publishedAt = calcDate(video?.snippet.publishedAt);
  const duration = calcDuration(video?.contentDetails.duration);

  return (
    <div className={styles.videoContent}>
      <FiMoreVertical size="24" className={styles.moreIcon} />
      <div className={styles.imgContent}>
        <HiOutlineClock size='22' className={styles.clockIcon} />
        <RiPlayList2Fill size='21' className={styles.playlistIcon} />
        <img src={videoThumbnail} alt='video thumbnail' className={styles.thumbnail} onClick={() => {
          navigate(`/detail/${data?.id.videoId}`);
        }} ></img>
        <p className={styles.duration}>{duration}</p>
      </div>
      <div className={styles.textContent}>
        <h3
          onClick={() => {
            navigate(`/detail/${data?.id.videoId}`);
          }}
        >
          {data.snippet.title}
        </h3>
        <span>
          조회수 {viewCount}회 <span className={styles.dot_separator}> • </span>{" "}
          {publishedAt} 전
        </span>
        <div className={styles.channelInfo}>
          <img
            src={channelThumbnail}
            alt="channel thumbnail"
            className={styles.channelThumbnail}
          ></img>
          <span className={styles.channelTitle}>
            {data.snippet.channelTitle}
          </span>
        </div>
        <p>{data.snippet.description}</p>
      </div>
    </div>
  );
}
