import { Outlet } from "react-router-dom";
import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
