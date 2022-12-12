import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './RSVP.css';
import { showSuccessMessage, showErrorMessage } from '../utils/ExceptionUtils';

function RSVP() {

    const [count, setCount] = useState(1);

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

    function handleTextareaChange(e) {
        setCount(e.target.value);
    }

    if (count == 0) {
        setCount(1)
    }

    return (
        <div className="contact-container">
            <div className="snackbar-centered">
                <div id="snackbar-fixed-container" ></div>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                <div className="input-container">
                    <label>First and Last Name*: </label>
                    <input type="text" name="from_name" maxLength="35" required/>
                </div>
                <div className="input-container">
                    <label>Email Address*: </label>
                    <input type="email" name="from_email" required/>
                </div>
                <div className="input-container">
                    <label>Phone Number*: </label>
                    <input placeholder={'1111111111'} size="10" maxLength="10" type="tel" id="phone" name="phone" pattern="[0-9]{10}" title="10 digit phone number" required/>
                </div>
                <div className="input-container">
                    <label>Guest Count*: </label>
                    <input type="number" min="1" max="10" name="count" placeholder={count} onChange={handleTextareaChange} required></input>
                </div>
                <div className="input-container">
                    <label>Message: </label>
                    <textarea name="html_message" required={count>1} title="If your guest count is greater than one, please list the names of who you are including."/>
                </div>
                <div className="input-container">
                    <input type="submit" value="Click Here to RSVP" />
                </div>
                <p>If your guest count is greater than one, please list the names of who you are including in the 'Message' field.</p>
            </form>
        </div>
    )
  }
  
  export default RSVP;