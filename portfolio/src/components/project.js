import React from 'react'

const Project = (props) => {

  return (
      <div className="project">
        <h3> {props.project.title} </h3>
        <img src='{project.img}' />
        <ul>
          <li> {props.project.description} </li>
          <li> <a href='{props.project.link}'><img className="icon" src="https://s3.us-east-2.amazonaws.com/eyg.portfolio/github+icon.jpg" /> </a></li>
        </ul>
      </div>
  );
};

export default Project;
