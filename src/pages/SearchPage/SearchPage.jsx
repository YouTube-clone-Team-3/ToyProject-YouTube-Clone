import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SearchList from '../../components/SearchList/SearchList';
import styles from './SearchPage.module.scss';
import { useLocation } from 'react-router-dom';
import data from '../../data/search.json'
import HoverVideo from './HoverVideo/HoverVideo';

export default function SearchPage () {
  const [search, setSearch] = useState([]);
  const location = useLocation();

  let word = location.pathname.substring(8);
  const params = {
    part: 'snippet',
    q: word,
    maxResults: 2,
    key: import.meta.env.VITE_API_KEY,
  }

  useEffect(() => {
    async function getData() {
      // const data = await axios.get('https://www.googleapis.com/youtube/v3/search', { params });
      setSearch(data.items);
    }
    getData();
  }, []);

  return (
    <div className={styles.searchVideos}>
      <HoverVideo />
      {
        search ? (
          search.map((item) => {
            if(item.id.kind === 'youtube#video') {
              return <SearchList data={item} key={item.id.videoId} />
            }
          })
        ) : <p>검색결과가 존재하지 않습니다.</p>
      }
    </div>
  )
}
