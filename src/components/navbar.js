import React from "react";

function Navbar(props) {
  return (
    <div className="App-header">
      <div>
        <h2>Joshua Gearheart</h2>
      </div>
      <div>
        <div class="button" id="button-6">
          <div id="spin"></div>
          <a href="/resume">Resume</a>
        </div>
        <div class="button" id="button-6">
          <div id="spin"></div>
          <a href="/">Home</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
