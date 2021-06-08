import React from "react";
import "./Header.css";
import bilde from "./bilde.jpg";

const Header = () => {
    return(
        <div className="Header">
            <h1 className="Name">Carl Axel Lind</h1>
            <h2 className="Study">Sivilingeniørstudent</h2>
            <p className="Terminal">carlaxellind@website:~$</p>
            <div className="WhoAmI">
                whoami
            </div> 
            <img className="Portrait" src={bilde} alt="bilde"/>
        </div>
    );
}

export default Header;