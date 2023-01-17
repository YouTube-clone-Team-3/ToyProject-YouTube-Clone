import { useState } from "react";
import reactLogo from "./assets/react.svg";
// // import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
