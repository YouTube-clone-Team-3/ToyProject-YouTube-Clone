import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./SearchList.module.scss";
import calcNum from "../../utils/CalNum";
import calcDate from "../../utils/CalDate";
import calcDuration from "../../utils/CalDuration";
// import channelData from "../../data/channel.json";
// import videoData from "../../data/videosDetail.json";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { HiOutlineClock } from "react-icons/hi";
import { RiPlayList2Fill } from "react-icons/ri";

export default function SearchList({ data }) {
  const [channel, setChannel] = useState([]);
  const [video, setVideo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getChannel() {
      let channelId = data?.snippet.channelId;
      const params = {
        part: "snippet",
        id: channelId,
        maxResults: 1,
        key: import.meta.env.VITE_API_KEY1,
      };
      try {
        const channelData = await axios.get('https://www.googleapis.com/youtube/v3/channels', { params });
        setChannel(channelData.data.items);
      } catch (error) {
        console.log("통신오류: ", error.response);
      }
    }
    async function getVideo() {
      let videoId = data?.id.videoId;
      const params = {
        part: "snippet, contentDetails, statistics",
        id: videoId,
        maxResults: 1,
        key: import.meta.env.VITE_API_KEY1,
      };
      try {
        const videoData = await axios.get('https://www.googleapis.com/youtube/v3/videos', { params });
        setVideo(videoData.data.items);
      } catch (error) {
        console.log("통신오류: ", error.response);
      }
    }
    getChannel();
    getVideo();
  }, []);

  const videoThumbnail = data?.snippet.thumbnails.high.url;
  const channelThumbnail = channel[0]?.snippet?.thumbnails.default.url;

  const viewCount = calcNum(video[0]?.statistics?.viewCount);
  const publishedAt = calcDate(video[0]?.snippet?.publishedAt);
  const duration = calcDuration(video[0]?.contentDetails?.duration);

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
          {video[0]?.snippet.title}
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
            {data?.snippet.channelTitle}
          </span>
        </div>
        <p>{data?.snippet.description}</p>
      </div>
    </div>
  );
}
