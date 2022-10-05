import React from "react";
import Project from "./project";

const Projects = () => {
  const projectList = [
    {
      projectTitle: "Project 1",
      linkURL: "fake url address",
    },
    {
      projectTitle: "Project 2",
      linkURL: "fake url address",
    },
    {
      projectTitle: "Project 3",
      linkURL: "fake url address",
    },
    {
      projectTitle: "Project 4",
      linkURL: "fake url address",
    },
  ];
  return (
    <div className="projectTitle">
      <h2>Projects:</h2>
      <div>
        {projectList.map((projectItem) => {
          console.log(projectItem);
          return <Project projectItem={projectItem} />;
        })}
        ;
      </div>
    </div>
  );
};

export default Projects;
