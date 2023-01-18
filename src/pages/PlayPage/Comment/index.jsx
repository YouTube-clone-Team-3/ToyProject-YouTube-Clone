import React, { useEffect, useState } from "react";
import Comments from "../../../components/Comments/Comments";
import styles from "./Comment.module.scss";
import axios from "axios";

const Comment = () => {
  const [comments, setComments] = useState("");

  useEffect(() => {
    async function getComments() {
      const data = await axios.get("http://localhost:3000/comments");
      setComments(data.data);
    }
    getComments();
  }, []);

  return (
    <article className={styles.comments}>
      <p>{`댓글 ${comments?.pageInfo?.totalResults.toLocaleString()}개`}</p>
      {comments?.items?.map((comment) => (
        <Comments key={comment.id} item={comment} />
      ))}
    </article>
  );
};

export default Comment;
