import React from 'react';
import './myDetails.css';

export default function Details(props) {
    return (
        <React.Fragment>
            <div className="aboutMe">
                <h1>Imran <span>Nawaz</span></h1>
                <h5 className="contactDetails">Manchester - 07411856464 - Immy01@hotmail.com</h5>
                <p>Hello! I'm Imran, a Software Developer based in Manchester, I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
                Here are a few technologies I've been working with recently:

                JavaScript (ES6+), HTML & CSS, React, Node.js, Express and iOS</p>

                <div className="social-icons">
                    <a href="#">
                        <i class="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-github"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-envelope"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-facebook"></i>
                    </a>
                
                </div>
            </div>

            <hr />

            <div id="experience" className="Experience">
                <h2>Experience</h2>
                <h3>Software Developer</h3><span>July 2019 - Present</span>
                <p>Information about me</p>
            </div>

            <hr />

            <div id="education" className="Education">
                <h2>Education</h2>
                <p>Information about me</p>
            </div>

            <hr />

            <div id="projects" className="Projects">
                <h2>Projects</h2>
                
            </div>

            <hr />

            <div id="interests" className="Interests">
                <h2>Interests</h2>
                <p>Information about me</p>
            </div>

        </React.Fragment>
            )
  }