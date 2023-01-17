import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function SearchPage () {
  const [search, setSearch] = useState([]);

  const params = {
    part: 'snippet',
    q: 'kakao',
    maxResults: 2,
    key: import.meta.env.VITE_API_KEY,
  }

  useEffect(() => {
    async function getData() {
      const data = await axios.get('https://www.googleapis.com/youtube/v3/search', { params })
      setSearch(data);
    }
    getData();
  }, []);

  console.log(search);
  return (
    <div>
      <p>search</p>
    </div>
  )
}
