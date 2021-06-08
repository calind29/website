import React from "react";
import "./Contact.css"
import {AiFillGithub} from "react-icons/ai";
import {IconContext} from "react-icons"
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";



const Contact = () => {
    return(
        <div className="contact">
            <h1>Kontakt</h1>
            <IconContext.Provider value={{ style: {fontSize: '100px', color: "white"}}} className="githublogo">
                <div>
                    <AiFillGithub />
                </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ style: {fontSize: '100px', color: "white"}}} className="linkedinlogo">
                <div>
                    <AiFillLinkedin />
                </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ style: {fontSize: '100px', color: "white"}}} className="facebooklogo">
                <div>
                    <AiFillFacebook />
                </div>
            </IconContext.Provider>
        </div>
    );
} 

export default Contact;