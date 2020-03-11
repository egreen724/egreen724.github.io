import React from 'react'

const Project = (props) => {
  
  return (
      <div className="project">
        <h3> {props.project.title} </h3>
        <ul>
          <li> {props.project.description} </li>
          <li> {props.project.link} </li>
        </ul>
      </div>
  );
};

export default Project;
