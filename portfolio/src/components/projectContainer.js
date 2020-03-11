import React, { Component } from 'react'
import Project from './project.js'

class ProjectContainer extends Component {

  state = {
    projects: [
      {
        title: 'GeoCulture',
        link: "github.com/egreen724/geoculture",
        img: "",
        description: ''
      },
      {
        title: 'Roam App',
        link: "github.com/egreen724/roam",
        img: "",
        description: ''
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
