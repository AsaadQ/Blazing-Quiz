import React from 'react';
import './Footer.css';

const ContactUs = () => {
  return ( 
    <div className="footer-center">

    <div>
      <i className="fa fa-map-marker"></i>
      <p><span>Skolegate</span> USN, BØ</p>
    </div>

    <div>
      <i className="fa fa-phone"></i>
      <p>31 00 80 00</p>
    </div>

    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#">Telemarksgruppa@company.com</a></p>
    </div>

  </div>

   );
}
 
export default ContactUs;
