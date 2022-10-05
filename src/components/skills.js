import React from "react";

const Skills = () => {
  return (
    <div className="skillSection">
      <p>
        <em>
          I am passionate about learning new tools, tech stacks and new
          perspectives. My primary technical skills include...
        </em>
      </p>
      <div className="skillListItems">
        <div>
          <a class="svg-link">
            HTML
            <svg xmlns="http://www.w3.org/2000/svg">
              <rect class="outline" />
            </svg>
          </a>
          <a class="svg-link">
            React.js
            <svg xmlns="http://www.w3.org/2000/svg">
              <rect class="outline" />
            </svg>
          </a>
        </div>
        <div>
          <a class="svg-link">
            CSS
            <svg xmlns="http://www.w3.org/2000/svg">
              <rect class="outline" />
            </svg>
          </a>
          <a class="svg-link">
            Redux
            <svg xmlns="http://www.w3.org/2000/svg">
              <rect class="outline" />
            </svg>
          </a>
        </div>
        <div>
          <a class="svg-link">
            Javascript
            <svg xmlns="http://www.w3.org/2000/svg">
              <rect class="outline" />
            </svg>
          </a>
          <a class="svg-link">
            Node.js
            <svg xmlns="http://www.w3.org/2000/svg">
              <rect class="outline" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
