import { useEffect, useState } from "react";
import { getSearch } from "./api/requests";
import reactLogo from "./assets/react.svg";
// // import "./App.css";
import Header from "./components/Header/Header";
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  const [search, setSearch] = useState([]);

  const params = {
    part: 'snippet',
    q: 'kakao',
    maxResults: 5,
  }

  useEffect(() => {
    async function getData() {
      const data = await getSearch(params);
      setSearch(data);
    }
    getData();
  }, []);

  console.log(search);
  console.log(import.meta.env.VITE_BASE_URL);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
