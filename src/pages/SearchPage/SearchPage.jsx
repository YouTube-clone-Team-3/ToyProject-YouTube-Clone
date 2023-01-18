import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SearchList from '../../components/SearchList/SearchList';
import styles from './SearchPage.module.scss';

export default function SearchPage () {
  const [search, setSearch] = useState([]);

  const params = {
    part: 'snippet',
    q: 'hello',
    maxResults: 2,
    key: import.meta.env.VITE_API_KEY,
  }

  useEffect(() => {
    async function getData() {
      const data = await axios.get('https://www.googleapis.com/youtube/v3/search', { params })
      setSearch(data.data.items);
    }
    getData();
  }, []);

  return (
    <div className={styles.searchVideos}>
      {
        search ? (
          search.map((item) => {
            return <SearchList data={item} key={item.id.videoId} />
          })
        ) : <p>검색결과가 존재하지 않습니다.</p>
      }
    </div>
  )
}
