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
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="from_email" />
                <label>Phone Number</label>
                <input type="number" name="phone" />
                <label>Guest Count</label>
                <input type="text" name="count" />
                <label>Message</label>
                <textarea name="html_message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
  }
  
  export default Contact;