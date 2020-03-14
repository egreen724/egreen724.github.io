import React from 'react'

const About = () => {
  return (

      <div id="about">
        <h2>ABOUT</h2>
        <img id="headshot" src="https://s3.us-east-2.amazonaws.com/eyg.portfolio/outdoor_headshot.jpg"/>
        <div id="bio">
          <p> Erin Green is a full stack web developer with experience in React, Redux, Ruby on Rails, and JavaScript with over five years of experience in nonprofit administration. Green has experience with project management, relationship building, and brings a unique design perspective to a development team from her background in the arts.</p>
          <p> Green received a BA in Art History from Tulane University, an MA in Arts Administration from the Savannah College of Art and Design, and completed an immersive software engineering course through the Flatiron School. </p>
        </div>
        <h4>CONTACT</h4>
        <a> <img className="icon" target="_blank" src="https://s3.us-east-2.amazonaws.com/eyg.portfolio/github+icon.jpg"/> </a>
      </div>
  );
};

export default About;
