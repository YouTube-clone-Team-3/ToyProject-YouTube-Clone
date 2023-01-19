// // import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import SubNavBar from "./components/NavBar/subNavBar";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(true);

  function navDisplay(display) {
    setDisplay(display);
  }

  return (
    <div className="App">
      <Header navDisplay={navDisplay} display={display} />
      <aside className={display ? "big" : "small"}>
        {display ? <NavBar /> : <SubNavBar />}
      </aside>
      <main>
        <Outlet context={{ navDisplay }} />
      </main>
    </div>
  );
}

export default App;
