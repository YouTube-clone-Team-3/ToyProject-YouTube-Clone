import React, { useState, useEffect } from "react";
import axios from "axios";
import RelatedVideos from "./RelatedVideo";
import Comment from "./Comment";
import styles from "./PlayPage.module.scss";
import Playing from "./PlayVideo/Playing";
import VideoInfo from "./PlayVideo/VideoInfo";
import VideoInfoDetail from "./PlayVideo/VideoInfoDetail";
import { useOutletContext, useParams } from "react-router";

export default function PlayPage() {
  // props 내려쓰시면됩니다
  let { id } = useParams();
  const [video, setVideo] = useState([])

  useEffect(() => {
    getVideo()
  }, [])

  // dummy data 사용

  async function getVideo() {
    const data = await axios.get("http://localhost:3000/video")
    setVideo(data.data.items)
  }

  // 실제 api 사용 props 내려서 쓰시면 됩니다!
  // useEffect(() => {
  //   getVideo()
  // }, [])

  // const params = {
  //   part: ['snippet', 'contentDetails', 'player', 'statistics'],
  //   id: id,
  //   key: import.meta.env.VITE_API_KEY
  // }

  // async function getVideo() {
  //   const data = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
  //     params,
  //     paramsSerializer: {
  //       indexes: null
  //     }
  //   })
  //   setVideo(data.data.items)
  // }
  const channelId = video[0]?.snippet?.channelId

  // Playpage진입시 좌측 Nav small로
  const { navDisplay } = useOutletContext();

  useEffect(() => {
    navDisplay(false);

    return () => {
      navDisplay(true);
    };
  }, []);

  return (
    <section className={styles.playPage}>
      <div className={styles.videoInfo}>
        <Playing id={id} />
        <VideoInfo video={video} />
        <VideoInfoDetail video={video} channelId={channelId} />
        <Comment id={id} />
      </div>
      <div className={styles.related}>
        <RelatedVideos id={id} />
      </div>
    </section>
  );
}
