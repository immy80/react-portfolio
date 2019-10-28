import React from 'react';
import Avatar from '../avatar.png';

export default function Sidebar(props) {
    return (
        <div className="divContainer">
        <img className="profileImage" src={Avatar} />
        
        <ul className="navbar">
          <li><a href="#" >About</a></li>
          <li><a data-scroll href="#experience">Experience</a></li>
          <li><a data-scroll href="#education">Education</a></li>
          <li><a data-scroll href="#projects">Projects</a></li>
          <li><a data-scroll href="#interests">Interests</a></li>
        </ul>
      </div>
    );
  }