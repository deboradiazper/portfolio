import React, { useState } from "react";
import './Home.css';
import { Contact } from "./Contact";


export const Home = () => {

const [popUp, setPop] = useState(false)

const handleClickOpen=()=> {
    setPop(!popUp)
}

//maybe no hace falta al final, al hacer click en el boton ya desaparece
const closePopUp=()=>{
    setPop(false)
}

    return (
        
        <div>
            <div class="containerCenter">

                <div class="row">
                    <div class="col-md-8"></div>
                    <div class="col-6 col-md-4">
                        <button className="button">
                            Technologies
                        </button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 col-md-4">
                        <button className="button">
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
                                <h1 onClick={closePopUp}>x</h1>
                        </div>
                    </div> : ""
                    }

                <div class="row">
                    <div className="col-md-10"></div>
                    <div class="col-md-2 mt-4">
                        <button className="button">
                                Projects
                        </button>
                    </div>
                </div>
            </div> 
        </div>

{/* aquí aparecerían las secciones al hacer click en el menú */}
        <div className="containerSections"> 
        <section>1</section>
        <section>2</section>
        <section>3</section>
        </div>

    </div>
    )
}


