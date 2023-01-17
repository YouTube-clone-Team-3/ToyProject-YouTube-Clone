import React from "react";
import RelatedVideos from "./RelatedVideo";
import Comment from "./Comment";
import styles from "./PlayPage.module.scss";

export default function PlayPage() {
  return (
    <section className={styles.playPage}>
      <Comment />
      <RelatedVideos />
    </section>
  );
}
