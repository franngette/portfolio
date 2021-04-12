import React from "react";
import './Footer.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__content">
        <div className="footer__content__container">
          <p className="footer__content__container__title">If you have a project in mind,<br />feel free to get in touch.</p>
          <div>
            <a href="https://www.linkedin.com/in/francis-alberto-gette-2822a8120/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              {" "}
              <FontAwesomeIcon size="2x" icon={faLinkedin} color="white" className='footer__content__container--linkedin' />
            </a>
            <a href="https://github.com/franngette" target="_blank" rel="noreferrer" aria-label="GitHub">
              {" "}
              <FontAwesomeIcon size="2x" icon={faGithub} color="white" className='footer__content__container--github' />
            </a>
            <a href="mailto: franngette@gmail.com" aria-label="Email">
              {" "}
              <FontAwesomeIcon size="2x" icon={faEnvelope} color="white" className='footer__content__container--mail' />
            </a>
          </div>
        </div>
        <p><span style={{ color: 'gray' }}>© 2021 All rights reserved.</span> Designed & Coded by Francis Gette</p>
      </div>
      <h1 className="footer__contact">Contact</h1>
    </footer>
  );
};

export default Footer;
