import React from "react";
import './Home.css';
 

export const Home = () => {
    return (
        
        <div>
            
            <div class="container home">
                <div class="row">
                    <div class="col-md-8"></div>
                    <div class="col-6 col-md-4">
                        <button className="button">
                            <span> Technologies
                            </span>
                        </button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 col-md-4">
                        About
                    </div>
                    <div class="col-6 col-md-4">
                        <h1 className="mainTitle">Hello I'm Débora.</h1>
                        <h5 className="subTitle">I'm a web developer who loves code, design and build things</h5>
                    </div>
                    <div class="col-6 col-md-4"></div>
                </div>

                <div class="row">
                    <div class="col-md-9">
                        Contact
                    </div>
                    <div class="col-md-3">Projects</div>
                </div>
            </div>
        </div>
    )
}


