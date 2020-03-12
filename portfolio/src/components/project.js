import React from 'react'

const Project = (props) => {
  let url = props.project.img
  return (
      <div className="project">
        <h3> {props.project.title} </h3>
        <img className='appImage' src={props.project.img} />
        <p>{props.project.description} </p>
         <a href='{props.project.link}'><img className="icon" src="https://s3.us-east-2.amazonaws.com/eyg.portfolio/github+icon.jpg" /> </a>

      </div>
  );
};

export default Project;
