import React from 'react';
import './PresAnimation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faHtml5, faReact, faCss3Alt, faYarn, faSass } from '@fortawesome/free-brands-svg-icons';
const PresAnimation = () => {
    return (
        <div className="bg-bubbles">
            <FontAwesomeIcon icon={faJsSquare} className="bg-bubbles__el" color='#efd81d' size='3x' />
            <FontAwesomeIcon icon={faHtml5} className="bg-bubbles__el" color='#dd4b25' />
            <FontAwesomeIcon icon={faCss3Alt} className="bg-bubbles__el" color='#006cb4' />
            <FontAwesomeIcon icon={faSass} className="bg-bubbles__el" color='#cc6699' />
            <FontAwesomeIcon icon={faReact} className="bg-bubbles__el" color='#53c1de' />
            <FontAwesomeIcon icon={faYarn} className="bg-bubbles__el" color='#3193bc' />
            <FontAwesomeIcon icon={faJsSquare} className="bg-bubbles__el" color='#efd81d' />
            <FontAwesomeIcon icon={faSass} className="bg-bubbles__el" color='#cc6699' />
            <FontAwesomeIcon icon={faJsSquare} className="bg-bubbles__el" color='#efd81d' />
            <FontAwesomeIcon icon={faCss3Alt} className="bg-bubbles__el" color='#006cb4' />
            <FontAwesomeIcon icon={faReact} className="bg-bubbles__el" color='#53c1de' />
        </div>
    );
}

export default PresAnimation;
