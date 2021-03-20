import React, { Component } from "react";

import ProjectCard from "../components/ProjectCard";
import projects from "../Projects.json";

class Portfolio extends Component {

  state = {
    projects: projects
  };

  render() {
    return (
      <div className="projectcard">
        {this.state.projects.map(project => (
          
          <ProjectCard

          ID={project.ID} name={project.projectName} imageURL={"/react-profile-live/" + project.imageURL} projectURL={project.projectURL}

          />

        ))}
      </div>
    );
  }
}

export default Portfolio;