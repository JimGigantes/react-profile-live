import React from "react";


function ProjectCard(props) {
  return (
    <div className="card" key={props.ID}>
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
        <img src={props.imageURL} className="img-rounded responsive" width = "300px" height = "300px" alt={props.name} />
      </div>
      <div className="content">
      
        <ul key={props.ID}>
          <li>
            <strong>Project Name:</strong> {props.name}
          </li>
          <li>
            <strong>github Link:</strong> {props.projectURL}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default ProjectCard;