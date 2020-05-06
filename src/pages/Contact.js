import React, { Component } from 'react';
// Externals

import "./contact.css"

const tilbaake =() =>{
  alert("Ditt spørsmål er sendt");
};

class Contact extends Component {


  render() {
    return (
        <>
       <div className="contact">
       <div className="t">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    
     
     <label for="lname">E-mail</label>
    <input type="email" id="lname" name="lastname" placeholder="Your last name.."/>

  

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>

    <input type="submit" value="Submit" onClick={tilbaake}/>
</div>
</div>

        </>
    );
  }
}

export default Contact;