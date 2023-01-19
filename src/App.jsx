// // import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import SubNavBar from "./components/NavBar/subNavBar";
import { useMediaQuery } from "react-responsive"
import './App.css';

function App() {
  const [display, setDisplay] = useState();

  function navDisplay(display) {
    setDisplay(display);
  }

  const isPc = useMediaQuery({
    query : "(min-width:1024px)"
  });
  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  return (
    <div className="App">
      <Header navDisplay={navDisplay}/>
      <aside className={display ? 'big' : 'small'}>
        {
          isPc && display ? (<NavBar />) : (<SubNavBar />)
        }
        {
          isTablet && display ? (<SubNavBar />) : (<NavBar />)
        }
      {/* {
        display ? (<NavBar />) : (<SubNavBar />)
      } */}
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
