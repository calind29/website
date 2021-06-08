import React from "react";
import "./About.css"
import Typewriter from 'typewriter-effect';

const About = () => {
    return(
        <div className="About">
            <div>Jeg er</div> 
            <div> </div> 
            <Typewriter
                options={{
                strings: ['utvikler', ' atlet', ' nysgjerrig'],
                autoStart: true,
                loop: true,
                }}
            />
        </div>
    );
} 

export default About;