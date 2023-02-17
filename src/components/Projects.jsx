import React from 'react';

import './Projects.css';

import Bootstrap from '../assets/Bootstrap.svg';
import css from '../assets/CSS.png';
import html from '../assets/HTML.png';
import js from '../assets/javascript.svg';
import react from '../assets/react.png';
import tailwind from '../assets/Tailwind.png';

function Projects() {
    return (
        <div>
            <div className="project-section">
                <h2 className="page-header">Projects</h2>

                <div className="project-container">
                    <div className="project-card" id="project1">
                        <div className="project-number project-number-right">01</div>
                        <div className="project-content project-content-left">

                            <div className="project-skills-container">
                                <img className="project-skill" src={Bootstrap} alt="" />
                                <img className="project-skill" src={css} alt="" />
                                <img className="project-skill" src={html} alt="" />
                                <img className="project-skill" src={js} alt="" />
                                <img className="project-skill" src={react} alt="" />
                                <img className="project-skill" src={tailwind} alt="" />
                            </div>

                            <h2 className="project-heading">MyWheather</h2>

                            <p className="project-subHeading">App which tells you wheather of any city across the globe
                            </p>
                            <div className="btn-grp">
                                <a href="https://djv03wheatherapp.netlify.app/" target="_blank">

                                    <button className="btn-pink btn-project">View Live</button>
                                </a>
                                <a href="">
                                    <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                                </a>
                                <a href="">
                                    <i title="Live Link" className="fa-solid fa-link icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card" id="project2">
                        <div className="project-number project-number-left">02</div>
                        <div className="project-content project-content-right">
                            <div className="project-skill-container">
                            <img className="project-skill" src={Bootstrap} alt="" />
                                <img className="project-skill" src={css} alt="" />
                                <img className="project-skill" src={html} alt="" />
                                <img className="project-skill" src={js} alt="" />
                                <img className="project-skill" src={react} alt="" />
                                <img className="project-skill" src={tailwind} alt="" />
                            </div>
                            <h2 className="project-heading">Rock-Paper-Scissor</h2>
                            <p className="project-sub-heading">
                                CLASSIC GAME, NEW WAY
                                <p>
                                    Your past time game made with HTML,CSS AND Javascript
                                </p>
                            </p>
                            <div className="btn-group">
                                <a href="https://djv03rockpaperscissor.netlify.app/" target="_blank">
                                    <button className="btn-pink btn-project">View Live</button>
                                </a>
                                <a href="">
                                    <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                                </a>
                                <a href="">
                                    <i title="Live Link" className="fa-solid fa-link icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card" id="project3">
                        <div className="project-number project-number-right">03</div>
                        <div className="project-content project-content-left">
                            <div className="project-skill-container">
                            <img className="project-skill" src={Bootstrap} alt="" />
                                <img className="project-skill" src={css} alt="" />
                                <img className="project-skill" src={html} alt="" />
                                <img className="project-skill" src={js} alt="" />
                                <img className="project-skill" src={react} alt="" />
                                <img className="project-skill" src={tailwind} alt="" />
                            </div>

                            <h2 className="project-heading">React Calculator</h2>
                            <p className="project-sub-heading">
                                Calculator made with react Hooks and state
                            </p>
                            <div className="btn-group">
                                <a href="https://djv03reactcalculator.netlify.app/" target="_blank">

                                    <button className="btn-pink btn-project" >View Live</button>
                                </a>
                                <a href="">
                                    <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                                </a>
                                <a href="">
                                    <i title="Live Link" className="fa-solid fa-link icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card" id="project4">
                        <div className="project-number project-number-left">04</div>
                        <div className="project-content project-content-right">
                            <div className="project-skill-container">
                            <img className="project-skill" src={Bootstrap} alt="" />
                                <img className="project-skill" src={css} alt="" />
                                <img className="project-skill" src={html} alt="" />
                                <img className="project-skill" src={js} alt="" />
                                <img className="project-skill" src={react} alt="" />
                                <img className="project-skill" src={tailwind} alt="" />
                            </div>
                            <h2 className="project-heading">project</h2>
                            <p className="project-sub-heading">
                                this is the project regarfing the greatest million $ react app of all time
                            </p>
                            <div className="btn-group">
                                <button className="btn-pink btn-project">View Live</button>
                                <a href="">
                                    <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                                </a>
                                <a href="">
                                    <i title="Live Link" className="fa-solid fa-link icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
