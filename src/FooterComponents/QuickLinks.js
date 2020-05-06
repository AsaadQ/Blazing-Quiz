import React from 'react';
import "./Footer.css";

const QuickLinks = () => {
  return (
    <div className="footer-items">
      <h2> Quick Links</h2>
      <div className="border"></div>
      <ul>
        <a href=""><li>Home</li></a>
        <a href=""><li>About Us</li></a>
        <a href=""><li>Services</li></a>
        <a href=""><li>Contact Us</li></a>
      </ul>
    </div>
  );
}
 
export default QuickLinks;