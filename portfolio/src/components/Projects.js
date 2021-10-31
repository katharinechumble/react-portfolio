import React from "react";
import projectList from "./Portfolio";
import { capitalizeFirstLetter } from "../utils/helpers";

function Projects(props) {
  const { projectList } = props;
  return (
    <section>
      <div className="card">
        <img
          src={projectList.image}
          alt="project image"
        />
        <h2 data-testid="h2tag">
          <a href={projectList.live}>
            {capitalizeFirstLetter(projectList.name)}
          </a>
        </h2>
        <a href={projectList.github}>View Repo</a>
      </div>
    </section>
  );
}
export default Projects;
