import React from "react";
import './ProjectsContainer.scss';

const ProjectsContainer = ({ children }) => {
  const renderChild = () => {
    return children.map((el, i) => (
      <div key={i} className="projects-container__content__child">
        {el}
      </div>
    ));
  };
  return <div className="projects-container">
    <div className="projects-container__title-container">
      <h1 className="projects-container__title-container--title">fran.projects</h1>
      <h2 className="projects-container__title-container--description">A few projects I have worked on...</h2>
    </div>
    <div className="projects-container__content">{renderChild()}</div>
  </div>;
};

export default ProjectsContainer;
