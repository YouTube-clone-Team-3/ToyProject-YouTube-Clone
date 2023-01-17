// // import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState();
  function navDisplay(display) {
    setDisplay(display);
  }

  return (
    <div className="App">
      <Header navDisplay={navDisplay}/>
      {
        display ? (<NavBar />) : null
      }
      <Outlet />
    </div>
  );
}

export default App;
