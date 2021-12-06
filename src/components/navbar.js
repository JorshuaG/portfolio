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
          <a href="#">About Me</a>
        </div>
        <div class="button" id="button-6">
          <div id="spin"></div>
          <a href="#">Projects</a>
        </div>
        <div class="button" id="button-6">
          <div id="spin"></div>
          <a href="#">Skills</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
