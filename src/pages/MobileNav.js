import React from 'react';
import './Home.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import {Link} from 'react-router-dom';

const MobileNav = (props) => {
  return (
    <nav>
      <div>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <p className="menu cta">Menu</p>
      <div id="mobile__menu" className="overlay">
        <ul className="nav__links">
          <Link className="nav-style" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav-style" to="/about">
            <li>FaQ</li>
          </Link>
          <Link className="nav-style" to="/article-list">
            <li>Course</li>
          </Link>
          <Link className="nav-style" to="/quiz">
            <li>Quiz</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
 
export default MobileNav;
 //function openNav() {
  //  document.getElementById('mobile__menu').style.width = "100%"
 //}

//function closeNav() {
   // document.getElementById('mobile__menu').style.width = "0";
  //}constructor(props) {

  //<p onclick="openNav"  className="menu cta">Menu</p>
      //<div id="mobile__menu" className="overlay">
       // <Link>
        //<li className="close" onclick="closeNav()">&times;</li>
        //</Link>
        //<div class="overlay__content">
         //   <ul className="nav__links">
          //    <Link className="nav-style" to="/">
           //     <li>Home</li>
            //  </Link>
             // <Link className="nav-style" to="/about">
              //  <li>om oss</li>
              //</Link>
              //<Link className="nav-style" to="/article-list">
               // <li>Course</li>
              //</Link>
             // <Link className="nav-style" to="/quiz">
              //  <li>Quiz</li>
             // </Link>
           // </ul>
           // </div>
        //</div>