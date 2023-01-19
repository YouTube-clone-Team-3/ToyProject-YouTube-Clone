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
        <VideoInfo />
        <VideoInfoDetail />
        <Comment id={id} />
      </div>
      <RelatedVideos id={id} />
    </section>
  );
}
