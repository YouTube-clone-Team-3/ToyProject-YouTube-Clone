// // import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SubNavBar from "./components/NavBar/subNavBar";
import { useMediaQuery } from "react-responsive";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(true);
  const location = useLocation();

  let pathName = location.pathname.substring(1, 7);

  function navDisplay(display) {
    setDisplay(display);
  }

  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  const isTablet = useMediaQuery({
    query: "(max-width:1023px)"
  });

  function displayClass() {
    if (isPc && display) {
      return "big"
    } else {
      return "small"
    }
  }

  function displayNav() {
    if (isPc && display) {
      return <NavBar />
    } else {
      return <SubNavBar />
    }
  }

  return (
    <div className="App">
      <Header navDisplay={navDisplay} display={display} />
      {
        pathName === 'detail' ? (
          <aside className={display ? 'big' : 'small'}>
            {
              display ? <NavBar /> : <SubNavBar />
            }
          </aside>
        ) : (
          <aside className={displayClass()}>{displayNav()}</aside>
        )
      }
      <main>
        <Outlet context={{ navDisplay }} />
      </main>
    </div>
  );
}

export default App;
