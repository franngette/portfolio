import React from "react";
import './Header.scss';
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <ul className="nav_list">
          <li>
            <a className="nav_list_item" href="#about">
              About
            </a>
            <a className="nav_list_item" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="nav_list_item" href="#tecnologies">
              Tecnologies
            </a>
          </li>
          <li>
            <a className="nav_list_item" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
