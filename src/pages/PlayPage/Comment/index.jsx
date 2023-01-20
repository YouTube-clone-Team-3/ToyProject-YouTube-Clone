import React, { useEffect, useState } from "react";
import Comments from "../../../components/Comments/Comments";
import styles from "./Comment.module.scss";
import axios from "axios";

const Comment = ({ id }) => {
  const [comments, setComments] = useState("");

  // 실제 api

  // const params = {
  //   part: "snippet",
  //   videoId: id,
  //   key: import.meta.env.VITE_API_KEY,
  // };

  // useEffect(() => {
  //   async function getComments() {
  //     try {
  //       const data = await axios.get(
  //         "https://www.googleapis.com/youtube/v3/commentThreads",
  //         { params }
  //       );
  //       if (data.status !== 200) {
  //         throw new Error();
  //       }
  //       setComments(data.data);
  //     } catch (error) {
  //       console.log("통신오류: ", error.response);
  //     }
  //   }
  //   getComments();
  // }, []);

  //테스트용

  useEffect(() => {
    async function getComments() {
      try {
        const data = await axios.get("http://localhost:3000/comments");
        if (data.status !== 200) {
          throw new Error();
        }
        setComments(data.data);
      } catch (error) {
        console.log("통신오류: ", error.response);
      }
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
