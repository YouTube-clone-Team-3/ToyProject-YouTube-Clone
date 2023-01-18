import React from "react";
import styles from "./RelatedVideos.module.scss";
import EachRelatedVideo from "../../../components/RelatedVideos/EachRelatedVideo";
import datas from "../../../data/realatedVideo.json";

const RelatedVideos = () => {
  return (
    <div className={styles.relatedVideos}>
      {datas.items.map((video) => (
        <EachRelatedVideo key={video.id.videoId} item={video} />
      ))}
    </div>
  );
};

export default RelatedVideos;
