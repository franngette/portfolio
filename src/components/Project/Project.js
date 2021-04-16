import React from "react";
import SlideImages from "../SlideImages/SlideImages";
import TechIcons from "../TechIcons/TechIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import './Project.scss'

const images = {
  Kino: ["./images/kino-1.png", "./images/kino-2.png"],
  Monitor: ["./images/monitor_gif.gif",
    "./images/monitor_sites.png",
    "./images/monitor_siteDetail.png",
    "./images/monitor_admin.png",],
  TaskManager: ["./images/taskmanager-1.png", "./images/taskmanager-2.png", "./images/taskmanager-3.png"],
  CoinTrace: ["./images/cointrace-1.png"],
  CoursesApps: ["./images/guess.png", "./images/meals.png", "./images/places.png", "./images/shop.png"]
};

const Project = ({ title, tech, color, link }) => {
  return (
    <div className="project">
      <div className="project__container" style={{ backgroundColor: color }}>
        <div className="project__container__title">{title}</div>
        <div className="project__container__content">
          <div className="project__container__content__image">
            <SlideImages images={images[title]} alt={title} />
          </div>
          <div className="project__container__content__icons">
            <TechIcons tech={tech} />
            <a href={link} target="_blank" rel="noreferrer" aria-label="Github">
              {" "}
              <FontAwesomeIcon size="2x" icon={faGithub} color="white" className='project__container__content__icons--github' />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;
