import React from "react";
import './Technologies.css';
import js from "../images/js.png";
import react from "../images/react.png";
import html from "../images/html.png";
import css from "../images/css.png";
import python from "../images/python.png";
import nodejs from "../images/nodejs.png"
import nextjs from "../images/nextjs.png"
import npm from "../images/npm.png"
import figma from "../images/figma.png"
import git from "../images/git.png"
import flask from "../images/flask.png"






export const Technologies = () => {
    return (
        <div>
            <div className="container technologies1">
                <img src={js} className="img" alt=""/>
                <img src={react} className="img" alt=""/>
                <img src={html} className="img" alt=""/>
                <img src={css} className="img" alt=""/>
                <img src={python} className="img" alt=""/>
                <img src={nodejs} className="img" alt=""/>
                <img src={nextjs} className="img" alt=""/>
                <img src={npm} className="img" alt=""/>
                <img src={figma} className="img" alt=""/>
                <img src={git} className="img" alt=""/>
                <img src={flask} className="img" alt=""/>

                </div>
            </div>
    )
} 

