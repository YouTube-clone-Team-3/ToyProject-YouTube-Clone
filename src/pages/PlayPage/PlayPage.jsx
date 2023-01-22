import React, { useState, useEffect } from "react";
import axios from "axios";
import RelatedVideos from "./RelatedVideo";
import Comment from "./Comment";
import styles from "./PlayPage.module.scss";
import PlayVideo from "./PlayVideo";
import { useOutletContext, useParams } from "react-router";
import videoInfo from "../../data/video.json";

export default function PlayPage() {
  // props 내려쓰시면됩니다
  let { id } = useParams();
  const [video, setVideo] = useState([]);
  // Playpage진입시 좌측 Nav small로
  const { navDisplay } = useOutletContext();
  // dummy data 사용
  // useEffect(() => {
  //   async function getVideo() {
  //     setVideo(videoInfo.items)
  //   }
  //   getVideo();
  //   navDisplay(false);
  //   return () => {
  //     navDisplay(true)
  //   }
  // }, [])

  // 실제 api 사용 props 내려서 쓰시면 됩니다!
  const params = {
    part: ["snippet", "contentDetails", "player", "statistics"],
    id: id,
    key: import.meta.env.VITE_API_KEY3,
  };
  useEffect(() => {
    async function getVideo() {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params,
            paramsSerializer: {
              indexes: null,
            },
          }
        );
        if (data.status !== 200) {
          throw new Error();
        }
        setVideo(data.data.items);
      } catch (error) {
        console.log(`통신 오류: ${error.response}`);
      }
    }
    getVideo();
    navDisplay(false);
    return () => {
      navDisplay(true);
    };
  }, [id]);

  const channelId = video[0]?.snippet?.channelId;

  return (
    <section className={styles.playPage}>
      <div className={styles.videoInfo}>
        <PlayVideo id={id} video={video} channelId={channelId} />
        <Comment id={id} />
      </div>
      <div className={styles.related}>
        <RelatedVideos id={id} />
      </div>
    </section>
  );
}
