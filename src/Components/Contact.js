import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_w18fmpm', 'template_lrjix2q', e.target, 'G2hPmuJ7EZffDAAFa')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div class="contact-container">
            <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                <div class="input-container">
                    <label>First and Last Name: </label>
                    <input type="text" name="from_name" />
                </div>
                <div class="input-container">
                    <label>Email Address: </label>
                    <input type="email" name="from_email" />
                </div>
                <div class="input-container">
                    <label>Phone Number: </label>
                    <input type="number" name="phone" />
                </div>
                <div class="input-container">
                    <label>Guest Count: </label>
                    <input type="text" name="count" />
                </div>
                <div class="input-container">
                    <label>Message: </label>
                    <textarea name="html_message" />
                </div>
                <div class="input-container">
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    )
  }
  
  export default Contact;