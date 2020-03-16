import React from 'react'

const Project = (props) => {

  function renderHeroku(){
    if (props.project.heroku) {
      return <a href={props.project.heroku}><img className="icon" target="_blank" src="https://s3.us-east-2.amazonaws.com/eyg.portfolio/export.jpeg" /> </a>
    }
  }

  return (
      <div className="project">
        <h3> {props.project.title} </h3>
        <a target="_blank" href={props.project.link}><img className='appImage' src={props.project.img} /></a>
        <p>{props.project.description} </p>
        <a target="_blank" href={props.project.link}><img className="icon" src="https://s3.us-east-2.amazonaws.com/eyg.portfolio/github+icon.jpg" /> </a>
        {renderHeroku()}

      </div>
  );
};

export default Project;
