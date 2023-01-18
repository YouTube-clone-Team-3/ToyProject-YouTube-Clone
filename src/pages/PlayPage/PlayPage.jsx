import React from "react";
import RelatedVideos from "./RelatedVideo";
import Comment from "./Comment";
import styles from "./PlayPage.module.scss";
import Playing from "./PlayVideo/Playing"
import VideoInfo from "./PlayVideo/VideoInfo"
import VideoInfoDetail from "./PlayVideo/VideoInfoDetail"

export default function PlayPage() {
  return (
    <section className={styles.playPage}>
      <Playing />
      <div className={styles.videoInfo}>
        <VideoInfo />
        <VideoInfoDetail />
      </div>
      <Comment />
      <RelatedVideos />
    </section>
  )
}
