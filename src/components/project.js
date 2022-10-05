import React from "react";

function Project(props) {
  return (
    <div className="ProjectItem">
      <h3>{props.projectItem.projectTitle}</h3>
      <p>Description of the project</p>
      <img
        className="projectLinkImg"
        src={`${process.env.PUBLIC_URL}/linkTransparent.gif`}
        alt="A placeholder image url"
      />
    </div>
  );
}

export default Project;
