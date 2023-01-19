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
    query : "(max-width:1023px)"
  });

  function displayClass() {
    if(isPc) {
      return display ? 'big' : 'small'
    } else {
      return display ? 'small' : 'big'
    }
  }

  function displayNav() {
    if(isPc) {
      return display ? <NavBar /> : <SubNavBar />
    } else {
      return display ? <SubNavBar /> : <NavBar />
    }
  }

  return (
    <div className="App">
      <Header navDisplay={navDisplay}/>
      <aside className={displayClass()}>
        {
          displayNav()
        }
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
