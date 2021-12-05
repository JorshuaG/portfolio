import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import * as dat from "dat.gui";

//component imports

import Navbar from "./components/navbar";
import ProfileContent from "./components/profileContent";
import HeaderContent from "./components/headerContent";

function App() {
  useEffect(() => {});

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <HeaderContent/>
      <ProfileContent />

      <ParticlesBg color={"#ffffff"} type="cobweb" bg={true} />
    </div>
  );
}

export default App;
