import React from 'react';
import "./Footer.css";

const FooterTitle = () => {
  return ( 
    <>
    <h1> Blazing Quiz</h1>
      <p>
      Blazing Quiz is a quiz created to make learning easier. Our main course is about Startup businesses.
      </p>
      <div className="footer-left">
				<p className="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">FaQ</a>
					
					<a href="#">Course</a>
				</p>

				<p className="footer-company-name">Telemarksgruppa © 2020</p>
			</div>
    </>
   );
}
 
export default FooterTitle;