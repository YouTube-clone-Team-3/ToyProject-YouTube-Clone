import React from "react";
import styles from "./RelatedVideos.module.scss";
import EachRelatedVideo from "../../../components/RelatedVideos/EachRelatedVideo";
import datas from "../../../data/realatedVideo.json";

const RelatedVideos = () => {
  return (
    <aside>
      {datas.items.map((video) => (
        <EachRelatedVideo key={video.id.videoId} item={video} />
      ))}
    </aside>
  );
};

export default RelatedVideos;
