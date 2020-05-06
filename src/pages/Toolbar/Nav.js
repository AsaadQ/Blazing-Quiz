import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Logo from "./2.png";
import DrawerToggleButton from "../Sidedrawer/DrawerToggleButton";
//<div id="mobile__menu" className="overlay">
//<Link>
// <li className="close" onClick="closeNav()">&times;</li>
//</Link>/ <Link>
//</Link>/ </div>
const Nav = (props) => {
  return (
    
    <header className="toolbar">
       <div className="BL">
                <img className="img" src={Logo} alt="logo" />
              </div>
      <nav className="toolbar__navigation">
     
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>

        <div className="toolbar_navigation-items">
          <ul className="nav__links li">
            <Link className="nav" to="/">
              <li>Home</li>
            </Link>
            <Link className="nav" to="/about">
              <li>FaQ</li>
            </Link>
            <Link className="nav" to="/article-list">
              <li>Course</li>
            </Link>
            <Link className="nav" to="/Contact">
              <li>Contact</li>
            </Link>
            <Link className="nav" to="/quiz">
              <li>Quiz</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
//<p className="menu cta">Menu</p>
//<div id="mobile__menu" className="overlay"> </div>
