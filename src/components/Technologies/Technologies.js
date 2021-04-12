import React from "react";
import { Icons } from '../TechIcons/iconPath'
import TechIcons from '../TechIcons/TechIcons'
import './Technologies.scss'
const Tecnologies = () => {
  return (
    <div className="tec">
      <div className="tec__title-container">
        <h1 className="tec__title-container__title">fran.technologies</h1>
        <h2 className="tec__title-container__description">Some tools i use</h2>
      </div>
      <TechIcons tech={Object.keys(Icons)} />
    </div>
  );
};

export default Tecnologies;
