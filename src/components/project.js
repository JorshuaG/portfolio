import React from "react";
import { Icon } from "@iconify/react";

function Project(props) {
  return (
    <div className="ProjectItem">
      <h3>{props.projectItem.projectTitle}</h3>
      <p>Description of the project</p>
      <div className="projectLinks">
        <a>
          <Icon icon="akar-icons:github-fill" color="white" width="2rem" />
        </a>
        <a>
          <Icon icon="akar-icons:link-on" color="white" width="2rem" />
        </a>
      </div>
    </div>
  );
}

export default Project;
