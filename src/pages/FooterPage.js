import React from 'react';
import '../FooterComponents/Footer.css';
import QuickLinks from '../FooterComponents/QuickLinks';
import Courses from '../FooterComponents/Courses';
import ContactUs from '../FooterComponents/ContactUs';
import FooterBottom from '../FooterComponents/FooterBottom';
import FooterTitle from '../FooterComponents/FooterTitle';

const FooterPage = () => {
  return ( 
      <>
      <footer className="footer-distributed" >
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-items">
          <FooterTitle />
          <ContactUs />
          <Courses />
          <FooterBottom />
        </div>
      </div>
    </div>
    </footer>
      </>
   );
}
 
export default FooterPage ;