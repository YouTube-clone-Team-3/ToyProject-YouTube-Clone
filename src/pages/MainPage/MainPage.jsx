import React, { useEffect, useState } from "react"
import styles from './MainPage.module.scss'
import data from '../../data/videos.json'
import MainList from "../../components/MainList/MainList";

export default function MainPage() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    async function getData() {
      setVideo(data.items);
    }
    getData();
  }, []);

  return (
    <div className={styles.MainVideos}>
      {
        video ? (
          video.map((item) => {
            return <MainList data={item} key={item.id.videoId} />
          })
        ) : <p>영상이 존재하지 않습니다.</p>
      }
    </div>
  )
}