import React from "react";
import "./Sidedrawer.css";
import { Link } from "react-router-dom";

const Sidedrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <Link className="side-drawer-links" to="/">
          <li>Home</li>
        </Link>
        <Link className="side-drawer-links" to="/about">
          <li>FaQ</li>
        </Link>
        <Link className="side-drawer-links" to="/article-list">
          <li>Course</li>
        </Link>
        <Link className="side-drawer-links" to="/Contact">
              <li>Contact</li>
            </Link>
        <Link className="side-drawer-links" to="/quiz">
          <li>Quiz</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidedrawer;
