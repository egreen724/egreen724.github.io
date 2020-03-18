import React, { Component } from 'react'
import Project from './project.js'

class ProjectContainer extends Component {

  state = {
    projects: [
      {
        title: 'GeoCulture',
        link: "https://github.com/egreen724/geoculture_react",
        img: "https://s3.us-east-2.amazonaws.com/eyg.portfolio/Screen+Shot+2020-03-12+at+12.14.04+AM.png",
        description: 'Web app built on a Ruby on Rails backend with a React/Redux frontend.'
      },
      {
        title: 'Roam App',
        link: "https://github.com/egreen724/rails-project",
        heroku: "https://roamrailsapp.herokuapp.com/",
        img: "https://s3.us-east-2.amazonaws.com/eyg.portfolio/Screen+Shot+2020-03-11+at+11.07.30+PM.png",
        description: 'A Ruby on Rails app to track your outdoor adventures and plan future trips.'
      },
      {
        title: 'ListenUp',
        link: "https://github.com/egreen724/podcast_tracker_SinatraProject",
        heroku: 'https://listenup-sinatra.herokuapp.com/',
        img: "https://s3.us-east-2.amazonaws.com/eyg.portfolio/Screen+Shot+2020-03-12+at+12.20.21+AM.png",
        description: 'A Sinatra-based web app for discovering new podcasts.'
      }
    ]
  }

  renderProjects = () => {
     return this.state.projects.map((project) => {
       return <Project project={project} />
     }
    )
  }

  render() {
    return (
      <div id="projectContainer">
        <h2>SELECT PORTFOLIO</h2>
        <br></br>
        {this.renderProjects()}
      </div>
    )
  }

}

export default ProjectContainer;
