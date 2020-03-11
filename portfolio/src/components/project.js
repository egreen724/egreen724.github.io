import React from 'react'

const Project = (project) => {
  return (
      <div className="project">
        <h3> {project.title} </h3>
        <ul>
          <li> {project.description} </li>
          <li> {project.link} </li>
        </ul>
      </div>
  );
};

export default Project;
