import React, { useState } from "react";
import {Link, animateScroll as scroll} from "react-scroll"
import "./Navbar.css"


const Navbar = () => {
    
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar)

    const scrollToTop = () => {
        return(scroll.scrollToTop);
    }
    
    return(
        <div className="Navbar">
            <div className={sidebar ? "sidebar-active" : "sidebar"}>
                <ul className="Navlinks" onClick={showSidebar}>
                    <li>
                        <a href="#" onClick={scrollToTop}
                        smooth={true} duration={500} spy={true} exact='true' offset={0}>
                        Om
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Tidslinje
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Prosjekter 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        CV
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Kontakt
                        </a>
                    </li>
                </ul>
            </div>
            <div className= "Burger" onClick={showSidebar}>
                <div className={sidebar ? "Line1-active" : "Line1"}></div>
                <div className={sidebar ? "Line2-active" : "Line2"}></div>
                <div className={sidebar ? "Line3-active" : "Line3"}></div>
            </div>
        </div>
    )
}

export default Navbar