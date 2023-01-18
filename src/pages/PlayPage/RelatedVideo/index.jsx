import React from "react";
import styles from "./RelatedVideos.module.scss";
import EachRelatedVideo from "../../../components/RelatedVideos/EachRelatedVideo";
import datas from "../../../data/realatedVideo.json";

const RelatedVideos = () => {
  // 원래는 url params로 video id 가져와서 datas에 넣기. 그러면 아래는 똑같이 동작.
  // 테스트때는 index를 props로 넘겨주어 relatedVideoSearch.json 목업에서 순서대로 불러오겠음. 추후 지우기@@@@
  return (
    <div>
      {datas.items.map((video, i) => (
        <EachRelatedVideo key={video.id.videoId} item={video} index={i} />
      ))}
    </div>
  );
};

export default RelatedVideos;
