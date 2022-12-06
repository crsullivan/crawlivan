import React from 'react';
import emailjs from 'emailjs-com';
import './RSVP.css';
import { showSuccessMessage, showErrorMessage } from '../utils/ExceptionUtils';

function RSVP() {

    function sendEmail(e) {

        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_w18fmpm', 'template_lrjix2q', e.target, 'G2hPmuJ7EZffDAAFa')
          .then((result) => {
            try{
                showSuccessMessage("Thank you for your RSVP!!", "You will receive a confirmation email shortly at the address you provided. If you do not receive this confirmation, please contact Connor. You will now be redirected to our home page within the next minute.");
              }catch(e){
                showErrorMessage("We ran into an issue...", "Please ensure your information is correct and try again. If you continue to receive this error, please contact Connor.");
              }
  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
              try{
                showErrorMessage("We ran into an issue...", "Please ensure your information is correct and try again. If you continue to receive this error, please contact Connor.");
              }catch(e){
              }
          });
            
      }

    return (
        <div className="contact-container">
            <div className="snackbar-centered">
                <div id="snackbar-fixed-container" ></div>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                <div className="input-container">
                    <label>First and Last Name: </label>
                    <input type="text" name="from_name" />
                </div>
                <div className="input-container">
                    <label>Email Address: </label>
                    <input type="email" name="from_email" />
                </div>
                <div className="input-container">
                    <label>Phone Number: </label>
                    <input type="number" name="phone" />
                </div>
                <div className="input-container">
                    <label>Guest Count: </label>
                    <input type="number" name="count" />
                </div>
                <div className="input-container">
                    <label>Message: </label>
                    <textarea name="html_message" />
                </div>
                <div className="input-container">
                    <input type="submit" value="Click Here to RSVP" />
                </div>
            </form>
        </div>
    )
  }
  
  export default RSVP;