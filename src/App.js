import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Rough1 from "./components/Rough.js/rough1";
import Rough2 from "./components/Rough2/Rough2";
import Download from "./components/Downloads/download";
// import KnowMe from "./components/KnowMe/KnowMe";
import Projects from "./components/Projects/Projects";
import GetInTouch from "./components/GetInTouch/GetInTouch";
// import Wrapper from "./components/Wrapper";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="app">

    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rough" element={<Rough1 />} />
          <Route path="/rough2" element={<Rough2 />} />
          <Route path="/download" element={<Download />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/getintouch" element={<GetInTouch />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
          
    </div>
  );
}

export default App;
