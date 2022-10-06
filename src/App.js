import "./App.css";
import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import { Routes, Route } from "react-router-dom";

//component imports

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Resume from "./components/resume";
import Home from "./components/Home";

function App() {
  useEffect(() => {});

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
      <Footer />
      <ParticlesBg color={"#ffffff"} type="cobweb" bg={true} />
    </div>
  );
}

export default App;
