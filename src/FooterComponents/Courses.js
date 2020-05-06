import React from 'react';
import "./Footer.css";
import {Link} from 'react-router-dom';
const Courses = () => {
  return ( 
  
    <div className="footer-right">

    <p className="footer-company-about">
      <span>About the company</span>
      we are a group of students in USN, and we got a task to help companies in there startup journey.
    </p>

    <div class="footer-icons">

      <a href="#"><i className="fa fa-facebook"></i></a>
      <a href="#"><i className="fa fa-twitter"></i></a>
      <a href="#"><i className="fa fa-linkedin"></i></a>
      <a href="#"><i className="fa fa-github"></i></a>

    </div>

  </div>

   );
}
 
export default Courses;
