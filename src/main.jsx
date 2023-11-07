// Import necessary libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import App from "./App.jsx";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="bg-[#0C1222] relative">
        <Link to="https://ngl.link/kamrul0903" target="_blank">
          <div className="top-[90vh] fixed left-5 z-10 flex flex-col items-center">
            <img src="./message.png" width={50} height={50} alt="" />
            <div>
              <small className=" text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">
                Ask Anything
              </small>
            </div>
          </div>
        </Link>
        <div className="max-w-screen-xl mx-auto px-5">
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
