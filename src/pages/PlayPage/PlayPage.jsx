import React from "react";
import RelatedVideos from "./RelatedVideo";
import Comment from "./Comment";
import styles from "./PlayPage.module.scss";
import PlayVideo from './PlayVideo'

export default function PlayPage() {
  return (
    <section className={styles.playPage}>
      <PlayVideo />
      <Comment />
      <RelatedVideos />
    </section>
  )
}
