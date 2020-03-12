import React, { Component } from 'react'
import Project from './project.js'

class ProjectContainer extends Component {

  state = {
    projects: [
      {
        title: 'GeoCulture',
        link: "https://github.com/egreen724/geoculture_react",
        img: "",
        description: 'Web app built on a Ruby on Rails backend with a React/Redux frontend.'
      },
      {
        title: 'Roam App',
        link: "https://github.com/egreen724/rails-project",
        heroku: "https://roamrailsapp.herokuapp.com/",
        img: "https://s3.us-east-2.amazonaws.com/eyg.portfolio/Screen+Shot+2020-03-11+at+11.07.30+PM.png",
        description: 'A Ruby on Rails app to track your outdoor adventures and plan future trips.'
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
      <div className="projectContainer">
        <h3>Select Portfolio</h3>
        <br></br>
        {this.renderProjects()}
      </div>
    )
  }

}

export default ProjectContainer;
