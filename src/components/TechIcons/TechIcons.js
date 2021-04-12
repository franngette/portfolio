import React from "react";
import { Icons } from "./iconPath";
import './TechIcons.scss'
const TechIcons = ({ tech }) => {

  const renderIcons = () => {
    return tech.map((el, i) => (
      <div key={i + el} className="techicons_container" style={{ backgroundColor: el === 'reactnative' ? '#222' : '' }}>
        <img src={Icons[el]} alt={el} className="techicons_container_item" title={el} />
      </div>

    ));
  };
  return <div className="techicons">{renderIcons()}</div>;
};

export default TechIcons;
