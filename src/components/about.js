import React from 'react'

const About = () => {
  return (

      <div id="about">
        <h2>ABOUT</h2>
        <img id="headshot" src="https://s3.us-east-2.amazonaws.com/eyg.portfolio/outdoor_headshot.jpg"/>
        <div id="bio">
          <p> Erin Green is a full stack web developer with experience in React, Redux, Ruby on Rails, and JavaScript with over five years of experience in nonprofit administration and fundraising. Green has experience with project management, graphic design, relationship management, and brings a unique design perspective to an engineering team from her background in the arts.</p>
          <p> Green received a BA in Art History from Tulane University, an MA in Arts Administration from the Savannah College of Art and Design, and completed an immersive software engineering course through the Flatiron School. </p>
        </div>
        <h4>CONTACT</h4>
        <a target="_blank" href="www.github.com/egreen724"> <img className="icon" src="https://s3.us-east-2.amazonaws.com/eyg.portfolio/github+icon.jpg"/> </a>
        <a target="_blank" href='mailto: erin.y.green@gmail.com'> <img className="icon" src="https://s3.us-east-2.amazonaws.com/eyg.portfolio/email+icon.png"/> </a>
      </div>
  );
};

export default About;
