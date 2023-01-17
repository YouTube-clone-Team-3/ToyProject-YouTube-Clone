import React from 'react'
import { Outlet } from 'react-router-dom'

export default function SearchPage () {
  const [search, setSearch] = useState([]);

  const params = {
    part: 'snippet',
    q: 'kakao',
    maxResults: 2,
  }

  useEffect(() => {
    async function getData() {
      // const data = await getSearch(params);
      setSearch(data);
    }
    getData();
  }, []);

  console.log(search);
  console.log(123);
  return (
    <div>
      <p>search</p>
    </div>
  )
}
