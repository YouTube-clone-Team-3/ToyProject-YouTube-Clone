import React, { useEffect, useState } from "react";
import styles from "./RelatedVideos.module.scss";
import EachRelatedVideo from "../../../components/RelatedVideos/EachRelatedVideo";
import axios from "axios";

const RelatedVideos = ({ id }) => {
  // 원래는 url params로 video id 가져와서 datas에 넣기. 그러면 아래는 똑같이 동작.
  // 테스트때는 index를 props로 넘겨주어 relatedVideoSearch.json 목업에서 순서대로 불러오겠음. 추후 지우기@@@@
  const [relatedVideos, setRelatedVideos] = useState("");

  // 실제 api

  const params = {
    part: "snippet",
    maxResults: 10,
    relatedToVideoId: id,
    type: "video",
    key: import.meta.env.VITE_API_KEY2,
  };

  useEffect(() => {
    async function getVideo() {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          { params }
        );
        if (data.status !== 200) {
          throw new Error();
        }
        setRelatedVideos(data.data);
      } catch (error) {
        console.log("통신오류: ", error.response);
      }
    }
    getVideo();
  }, [id]);

  //테스트용

  // useEffect(() => {
  //   async function getVideo() {
  //     try {
  //       const data = await axios.get("http://localhost:3000/relatedVideo");
  //       if (data.status !== 200) {
  //         throw new Error();
  //       }
  //       setRelatedVideos(data.data);
  //     } catch (error) {
  //       console.log("통신오류: ", error.response);
  //     }
  //   }
  //   getVideo();
  // }, []);

  return (
    <div className={styles.relatedVideos}>
      {relatedVideos?.items?.map((video, i) => (
        <EachRelatedVideo key={video.id.videoId} item={video} index={i} />
      ))}
    </div>
  );
};

export default RelatedVideos;
