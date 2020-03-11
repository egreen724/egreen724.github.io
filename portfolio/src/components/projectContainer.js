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
      }
    ]
  }

  renderProjects = () => {
     this.state.projects.map((project) => {
       return <Project project={project} />
     }
    )
  }

  render() {
    return (
      <div >
        {this.renderProjects()}
      </div>
    )
  }

}

export default ProjectContainer;
