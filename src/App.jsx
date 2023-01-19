// // import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import SubNavBar from "./components/NavBar/subNavBar";
import { useMediaQuery } from "react-responsive";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(true);

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
      <aside className={displayClass()}>{displayNav()}</aside>
      <main>
        <Outlet context={{ navDisplay }} />
      </main>
    </div>
  );
}

export default App;
