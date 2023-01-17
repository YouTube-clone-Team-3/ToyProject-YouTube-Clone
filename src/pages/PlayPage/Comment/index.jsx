import React from "react";
import datas from "../../../data/comments.json";
import Comments from "../../../components/Comments/Comments";
import styles from "./Comment.module.scss";

const Comment = () => {
  return (
    <article className={styles.comments}>
      <p>{`댓글 ${datas.pageInfo.totalResults.toLocaleString()}개`}</p>
      {datas.items.map((comment) => (
        <Comments key={comment.id} item={comment} />
      ))}
    </article>
  );
};

export default Comment;
