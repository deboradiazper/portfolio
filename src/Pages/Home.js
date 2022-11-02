import React, { useState } from "react";
import AOS from 'aos';

import './Home.css';
import { Contact } from "./Contact";
import { Technologies } from "./Technologies";
import { About } from "./About";
import { Projects } from "./Projects";



export const Home = () => {

const [popUp, setPop] = useState(false)
const [tech, setTech] = useState(false)
const [about, setAbout] = useState(false)
const [projects, setProjects] = useState(false)

const handleClickOpen=()=> {
    setPop(!popUp)
}
const handleClickTech=()=> {
    setTech(!tech)
}
const handleClickAbout=()=> {
    setAbout(!about)
}
const handleClickProjects=()=> {
    setProjects(!projects)
}







    return (
        
        <div>
            <div class="containerCenter">

                <div class="row">
                    <div class="col-md-8"></div>
                    <div class="col-6 col-md-4">
                        <button onClick={handleClickTech} className="button">
                            Technologies
                        </button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 col-md-4">
                        <button onClick={handleClickAbout} className="button">
                                About
                        </button>
                    </div>

                    <div className="col-6 col-md-4">
                        <h1 className="mainTitle">Hello I'm Débora.</h1>
                        <h5 className="subTitle">I'm a web developer who loves code, design and build things</h5>
                    </div>
                    <div class="col-6 col-md-4"></div>
                </div>

                <div class="row">
                    <div className="col-md-9">
                        <button onClick={handleClickOpen} className="button">
                                Contact
                        </button>
                    </div>
                    { popUp ?
                    <div className="main">
                        <div className="popup">
                                <Contact/>
                        </div>
                    </div> : ""
                    }

                <div class="row">
                    <div className="col-md-10"></div>
                    <div class="col-md-2 mt-4">
                        <button onClick={handleClickProjects} className="button">
                                Projects
                        </button>
                    </div>
                </div>
            </div> 
        </div>

<div className="container">
    <div data-aos="fade-right">
    { about ?
                <div className="main">
                    <div className="about">
                            <About/>
                    </div>
                </div> : ""
                }
            </div>
    <div className="technologies"> 
    { tech ?
                <div className="main">
                    <div className="tech">
                            <Technologies/>
                    </div>
                </div> : ""
                }
    </div>
    <div className="projects"> 
    { tech ?
                <div className="main">
                    <div className="projects">
                            <Projects/>
                    </div>
                </div> : ""
                }
    </div>
       
        
        </div>
        </div>
    )
}


